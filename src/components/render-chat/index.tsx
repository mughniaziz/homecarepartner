import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Theme} from 'theme';
import useStyles from './styles';
import {HchatData} from '@redux/healthchat/hchatInterface';
import moment from 'moment';

interface RenderChatProps {
  item?: HchatData;
}

function RenderChatBallon({item}: RenderChatProps) {
  const {colors} = useTheme() as Theme;
  const styles = useStyles(colors);

  return (
    <>
      <View
        key={item?.id}
        style={[
          styles.ballonChat,
          item?.isFromDoctor ? styles.ballonDoctor : styles.ballonUser,
        ]}>
        {item?.imageUrl !== null && (
          <Image
            source={{uri: item?.imageUrl}}
            style={[
              item?.content !== '' && styles.mt12,
              item?.isFromDoctor ? styles.imageChatDoctor : styles.imageChat,
            ]}
          />
        )}
        {item?.content !== '' && (
          <Text
            style={item?.isFromDoctor ? styles.convDoctor : styles.convUser}>
            {item?.content}
          </Text>
        )}
      </View>
      <Text
        style={
          item?.isFromDoctor ? styles.timeStampDoctor : styles.timeStampUser
        }>
        {moment(item?.sentAt).format('HH.mm')}
      </Text>
    </>
  );
}

export default memo(RenderChatBallon);
