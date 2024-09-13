import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import io from 'socket.io-client';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImageView from 'react-native-image-viewing';
import {RootState} from '@redux/rootInterface';
import {HchatData, HchatDispatch} from '@redux/healthchat/hchatInterface';
import {
  getHChats,
  replyChat,
  resetHChat,
  endedChat,
} from '@redux/healthchat/actions';
import {Theme} from 'theme';
import {RootProps} from 'rootNavigation';
import IcBack from '@icons/ic_back.svg';
import IcAttachment from '@icons/ic_attachment.svg';
import IcSend from '@icons/ic_send.svg';
import DefaultAvatar from '@images/default_img/avatar_default.png';
import useStyles from './styles';
import {BASE_URL} from '@config/endpoint';
import RenderChatBallon from '@components/render-chat';

const socket = io(BASE_URL);

function ChatScreen({navigation, route}: RootProps<'chat'>) {
  const {user, id, endChat, isClose} = route.params;
  const dispatch = useDispatch<HchatDispatch>();
  const {loading, message} = useSelector((state: RootState) => state.hchat);
  const {colors} = useTheme() as Theme;
  const styles = useStyles(colors);
  const [messages, setMessages] = useState<HchatData[]>([]);
  const scrollViewRef = useRef<any>(null);
  const [content, setContent] = useState('');
  const [closeChat, setCloseChat] = useState(false);
  const diffTime = moment(endChat).isBefore(moment());
  const [attach, setAttach] = useState<any>(null);

  const age = user ? moment().diff(user?.dob, 'years') : 0;
  const openLibrary = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });
    if (result) {
      if (!result.didCancel) {
        if (result.assets !== undefined) {
          const res = {
            type: result.assets[0].type,
            name: result.assets[0].fileName,
            uri: result.assets[0].uri,
          };
          setAttach(res);
        }
      }
    }
  };

  useEffect(() => {
    scrollViewRef?.current?.scrollToEnd({animated: true});
  }, [messages]);

  useEffect(() => {
    if (diffTime) {
      setCloseChat(true);
    } else {
      setCloseChat(false);
    }
  }, [diffTime]);

  useEffect(() => {
    socket.emit('joinChat', {chatId: id});

    socket.on('chatMessages', messages => {
      setMessages(messages);
      scrollViewRef?.current?.scrollToEnd({animated: true});
    });

    socket.on('userSent', () => {
      dispatch(getHChats({id}));
      scrollViewRef?.current?.scrollToEnd({animated: true});
    });

    socket.on('replyMessage', () => {
      dispatch(getHChats({id}));
      scrollViewRef?.current?.scrollToEnd({animated: true});
    });

    return () => {
      socket.off('chatMessages');
      socket.off('userSent');
      socket.off('replyMessage');
    };
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getHChats({id}));
  }, [dispatch, id]);

  useEffect(() => {
    if (message === 'replied') {
      dispatch(resetHChat());
      setContent('');
      setAttach(null);
    } else if (message === 'chat_ended') {
      dispatch(resetHChat());
      navigation.goBack();
    }
  }, [dispatch, message, navigation]);

  const handlePost = () => {
    if (attach === null && content.length > 2) {
      console.log('attach null content not empty');
      dispatch(
        replyChat({
          idChat: id,
          content: content,
        }),
      );
    } else if (attach !== null && content === '') {
      console.log('attach not null content empty');
      dispatch(
        replyChat({
          idChat: id,
          image: attach,
        }),
      );
    } else {
      console.log('attach not null content not empty');
      dispatch(
        replyChat({
          idChat: id,
          content: content,
          image: attach,
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IcBack />
        </TouchableOpacity>
        <Image
          style={styles.headAva}
          source={
            user?.avatarUrl !== null ? {uri: user?.avatarUrl} : DefaultAvatar
          }
        />
        <View>
          <Text style={styles.headName}>{user?.fullname}</Text>
          <Text style={styles.headDesc}>{user?.gender}</Text>
        </View>
      </View>
      {isClose && (
        <View style={styles.closedNotificationWrapper}>
          <View style={styles.closedNotificationWrap}>
            <Text style={styles.closedNotificationText}>This conversation is closed</Text>
          </View>
        </View>
      )}
      <FlatList
        ref={scrollViewRef}
        contentContainerStyle={styles.containerList}
        data={messages ?? []}
        renderItem={({item}) => <RenderChatBallon item={item} />}
      />
      {!isClose && !closeChat ? (
        <>
          {attach !== null && (
            <View style={styles.imgMiniWrapper}>
              <Image
                source={{uri: attach?.uri}}
                style={styles.imgMiniPreview}
              />
            </View>
          )}
          <View style={styles.inputTextWrapper}>
            <View style={styles.inputTextWrap}>
              <TouchableOpacity onPress={openLibrary}>
                <IcAttachment />
              </TouchableOpacity>
              <TextInput
                placeholder="Write a message"
                placeholderTextColor={colors.tertiaryDarker20}
                style={styles.inputText}
                value={content}
                onChangeText={setContent}
                multiline
              />
              {(content.length > 2 || attach !== null) && (
                <TouchableOpacity disabled={loading} onPress={handlePost}>
                  {loading ? <ActivityIndicator /> : <IcSend />}
                </TouchableOpacity>
              )}
            </View>
          </View>
        </>
      ) : (
        !isClose && (
          <View style={styles.btnEndWrap}>
            <TouchableOpacity
              onPress={() => dispatch(endedChat({idChat: id}))}
              disabled={loading}>
              <View style={styles.btnEnd}>
                {loading ? (
                  <ActivityIndicator />
                ) : (
                  <Text style={styles.btnEndText}>End Chat</Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
        )
      )}
    </View>
  );
}

export default ChatScreen;
