import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavigatorParamsList} from '../types/types';
import {Text, View} from 'react-native';

export interface MessageScreenProps {
  navigation: StackNavigationProp<RootNavigatorParamsList, 'Message'>;
}

export const MessageScreen: React.FC<MessageScreenProps> = _ => {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
};
