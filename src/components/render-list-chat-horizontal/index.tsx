import React, {memo} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {DashboardChat} from '@redux/home/homeInterface';
import {Theme} from 'theme';
import DefaultAvatar from '@default_img/avatar_default.png';
import useStyles from './styles';

interface RLCHorizontalProps {
  onPress?: () => void;
  item?: DashboardChat | null;
}

function RLChatHorizontal({onPress, item}: RLCHorizontalProps) {
  const {colors} = useTheme() as Theme;
  const styles = useStyles(colors);

  return (
    <TouchableOpacity
      onPress={onPress}>
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
            <Text style={styles.nameText}>{item?.user?.fullname}</Text>
            <Text style={styles.genderText}>{item?.user?.gender ?? ''}</Text>
            <Text style={styles.topicText}>{item?.topic}</Text>
          </View>
        </View>
        <View style={styles.itemLine} />
        <View style={styles.itemPad12}>
          <Text style={styles.statusText}>
            {item?.statusChat === 'active'
              ? 'Next patient chat consultation'
              : 'Patient chat consultation closed'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default memo(RLChatHorizontal);
