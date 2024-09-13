import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {RootState} from '@redux/rootInterface';
import {DashboardDispatch} from '@redux/home/homeInterface';
import {getDashboard} from '@redux/home/actions';
import {RootProps} from 'rootNavigation';
import IcActivity from '@icons/bottom_menu/ic_activity_off.svg';
import IcSearch from '@icons/ic_search.svg';
import IcChat from '@icons/ic_health_chat.svg';
import IcRight from '@icons/ic_right.svg';
import IcPatient from '@icons/ic_patient.svg';
import DefaultAvatar from '@default_img/avatar_default.png';
import {Theme} from 'theme';
import useStyles from './styles';
import FormInput from '@components/form-input';
import CarouselBanner from '@components/carousel';
import RenderListChatHorizontal from '@components/render-list-chat-horizontal';

function HomeScreen({navigation}: RootProps<'home'>) {
  const dispatch = useDispatch<DashboardDispatch>();
  const {user} = useSelector((state: RootState) => state.core);
  const {count, order, chat} = useSelector((state: RootState) => state.home);
  const {colors} = useTheme() as Theme;
  const styles = useStyles(colors);
  const {width} = Dimensions.get('screen');

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(getDashboard());
    });
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          source={
            user?.avatarUrl !== null ? {uri: user?.avatarUrl} : DefaultAvatar
          }
          style={styles.imgAva}
        />
        <View style={styles.header}>
          <Text style={styles.nameText}>{user?.fullname}</Text>
          <Text>
            {user?.role?.name === 'Clinic'
              ? user?.clinic?.address
              : user?.role?.name === 'Doctor'
              ? user?.doctor?.specialization
              : ''}
          </Text>
        </View>
        <TouchableOpacity>
          <IcActivity />
        </TouchableOpacity>
      </View>
      <FormInput placeholder="Search Here" hasPrefix icPrefix={<IcSearch />} />
      <ScrollView>
        <View style={[styles.catWrap]}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('activity', {
                initial: 'Health Chat',
              })
            }>
            <View style={styles.btnCategory}>
              <IcChat />
              <View style={styles.header}>
                <Text style={styles.catNameText}>Chats</Text>
                <Text style={styles.catCountText}>
                  {count?.healthchat_count ?? 0}
                </Text>
              </View>
              <IcRight />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('activity', {
                initial: 'Home Care',
              })
            }>
            <View style={styles.btnCategory}>
              <IcPatient />
              <View style={styles.header}>
                <Text style={styles.catNameText}>Patient</Text>
                <Text style={styles.catCountText}>
                  {count?.homecare_count ?? 0}
                </Text>
              </View>
              <IcRight />
            </View>
          </TouchableOpacity>
        </View>
        <CarouselBanner />
        <View>
          <View style={styles.catWrap}>
            <Text>Next Patient</Text>
            <Text>See All</Text>
          </View>
          <FlatList
            horizontal
            data={order ?? []}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View style={styles.listItemWrapper}>
                  <View style={styles.listItemWrap}>
                    <Image
                      style={styles.listImgAva}
                      source={
                        item?.user?.avatarUrl !== null
                          ? {uri: item?.user?.avatarUrl}
                          : DefaultAvatar
                      }
                    />
                    <View style={styles.listItem}>
                      <Text>{item?.user?.fullname}</Text>
                      <Text>{item?.user?.gender ?? ''}</Text>
                      <Text>{item?.complain}</Text>
                    </View>
                  </View>
                  <View style={styles.itemLine} />
                  <View style={styles.itemPad12}>
                    <Text>{item?.status}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <View style={styles.catWrap}>
            <Text>Next Chat</Text>
            <Text>See All</Text>
          </View>
          <FlatList
            horizontal
            data={chat ?? []}
            renderItem={({item}) => (
              <RenderListChatHorizontal
                onPress={() =>
                  navigation.navigate('chat', {
                    user: item.user ?? {},
                    id: item?.id ?? 0,
                    endChat: item?.endChat ?? '',
                    isClose: item?.isClosed ?? false,
                  })
                }
                item={item}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
