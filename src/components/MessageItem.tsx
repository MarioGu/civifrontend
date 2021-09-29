import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MessageInterface} from '../store';
import {RootNavigatorParamsList} from '../types/types';

interface MessageItemInterface {
  message: MessageInterface;
  navigation: StackNavigationProp<RootNavigatorParamsList>;
}

export const MessageItem: React.FC<MessageItemInterface> = ({
  message,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Message');
      }}>
      <View style={styles.container}>
        <Text>{message.timestamp}</Text>
        <Text>{message.subject}</Text>
        <Text>{message.detail}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
