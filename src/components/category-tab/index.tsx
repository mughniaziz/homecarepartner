import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import IcMore from '@icons/ic_more_vertical.svg';
import {useStyles} from './styles';

interface TabItemProps {
  name: string | React.ReactNode;
  key: string;
  component?: any;
}

interface CategoryTab {
  tabs: TabItemProps[];
  morePress?: TouchableOpacityProps['onPress'];
  componentSet?: any;
  hasMore?: boolean;
  label?: string;
  style?: StyleProp<ViewStyle>;
}

function CategoryTab({
  tabs,
  morePress,
  componentSet = {},
  hasMore = true,
  label,
  style = {},
}: CategoryTab) {
  const {colors} = useTheme();
  const styles = useStyles(colors);
  const [focused, setFocused] = useState('all');

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.tabsContainer, style]}>
        <TouchableOpacity
          onPress={() => {
            componentSet('all');
            setFocused('all');
          }}>
          <View
            style={
              focused === 'all' ? styles.tabAllFocused : styles.tabAllUnfocused
            }>
            <Text
              style={
                focused === 'all' ? styles.textActive : styles.textInactive
              }>
              All
            </Text>
          </View>
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map(item => (
            <TouchableOpacity
              key={item.key}
              onPress={() => {
                setFocused(item.key);
                componentSet(item.key);
              }}>
              <View
                style={
                  focused === item.key
                    ? styles.tabsItemFocused
                    : styles.tabsItemUnfocused
                }>
                <Text
                  style={
                    focused === item.key
                      ? styles.textActive
                      : styles.textInactive
                  }>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {hasMore && (
          <TouchableOpacity onPress={morePress}>
            <View style={styles.tabAllUnfocused}>
              <IcMore />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

export default CategoryTab;
