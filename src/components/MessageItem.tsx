import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MessageInterface} from '../store';

interface MessageItemInterface {
  message: MessageInterface;
}

export const MessageItem: React.FC<MessageItemInterface> = ({message}) => {
  return (
    <View style={styles.container}>
      <Text>{message.timestamp}</Text>
      <Text>{message.subject}</Text>
      <Text>{message.detail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
