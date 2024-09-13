import React, {memo, useEffect, useMemo, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {RootState} from '@redux/rootInterface';
import {getListHChat} from '@redux/healthchat/actions';
import {HchatDispatch} from '@redux/healthchat/hchatInterface';
import CategoryTab from '@components/category-tab';
import {RootProps} from 'rootNavigation';
import {Theme} from 'theme';
import RenderListHchat from '@components/render-list-hchat';
import DefaultAvatar from '@default_img/avatar_default.png';
import useStyles from './styles';

function HChatTab({navigation}: RootProps<'Health Chat'>) {
  const {colors} = useTheme() as Theme;
  const styles = useStyles(colors);
  const dispatch = useDispatch<HchatDispatch>();
  const {listHChat} = useSelector((state: RootState) => state.hchat);
  const [component, setComponent] = useState('all');
  const tabs = useMemo(
    () => [
      {name: 'Active', key: 'active'},
      {name: 'Completed', key: 'ended'},
    ],
    [],
  );

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      dispatch(
        getListHChat({
          page: 1,
          limit: 10,
        }),
      );
    });
    return subscribe;
  }, [dispatch, navigation]);

  useEffect(() => {
    if (component !== 'all') {
      dispatch(
        getListHChat({
          status: component,
          page: 1,
          limit: 10,
        }),
      );
    } else {
      dispatch(
        getListHChat({
          page: 1,
          limit: 10,
        }),
      );
    }
  }, [dispatch, component]);

  return (
    <View>
      <CategoryTab
        tabs={tabs}
        hasMore={false}
        componentSet={(key: string) => setComponent(key)}
        style={styles.body}
      />
      <View style={styles.body}>
        <FlatList
          data={listHChat ?? []}
          renderItem={({item}) => (
            <RenderListHchat
              item={item}
              onPress={() => navigation.navigate('chat', {
                user: item?.user ?? {},
                id: item?.id ?? 0,
                endChat: item?.endChat ?? '',
                isClose: item?.isClosed ?? false,
              })}
            />
          )}
        />
      </View>
    </View>
  );
}

export default memo(HChatTab);
