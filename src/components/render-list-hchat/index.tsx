import React, {memo} from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import moment from 'moment';
import {Theme} from 'theme';
import {HCData} from '@redux/healthchat/hchatInterface';
import DefaultAvatar from '@default_img/avatar_default.png';
import useStyles from './styles';

interface RLHChatProps {
  item?: HCData;
  onPress?: () => void;
}

function RenderListHChat({item, onPress}: RLHChatProps) {
  const {colors} = useTheme() as Theme;
  const styles = useStyles(colors);

  return (
    <TouchableOpacity
      onPress={onPress}>
      <View style={styles.listItemWrapper}>
        <View style={styles.listItemWrap}>
          <Image
            source={
              item?.user?.avatarUrl !== null
                ? {uri: item?.user?.avatarUrl}
                : DefaultAvatar
            }
            style={styles.itemAva}
          />
          <View style={styles.itemWrapper}>
            <Text style={[styles.textSmall, styles.mabot6]}>{moment(item?.createdDate).format('DD MMM yyyy')}</Text>
            <Text style={[styles.textMedium, styles.mabot6]}>{item?.user?.fullname}</Text>
            <Text style={[styles.textSmall, styles.mabot8]}>
              {item?.user?.gender},{' '}
              {item?.user?.dob !== null
                ? moment(moment()).diff(moment(item?.user?.dob), 'years')
                : 0}{' '}
              years old
            </Text>
            <Text style={styles.textSmall}>{item?.topic}</Text>
          </View>
        </View>
        <View style={styles.itemLine} />
        <View style={styles.statusWrap}>
          <Text style={styles.textSmall}>
            {item?.statusChat === 'active'
              ? 'This conversation is ongoing'
              : 'This conversation has been closed'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default memo(RenderListHChat);
