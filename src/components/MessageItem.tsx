import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {formatDate} from '../helpers';
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
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('Message', {
          message: message,
        });
      }}>
      <View style={styles.container}>
        <View style={[styles.avatar, !message.read && styles.avatarRead]}>
          <Text style={[styles.avatarText, !message.read && styles.bold]}>
            {message.id}
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, !message.read && styles.bold]}>
            {message.subject}
          </Text>
          <Text style={[styles.subTitle, !message.read && styles.bold]}>
            {formatDate(message.timestamp)}
          </Text>
        </View>
        <Text style={[styles.chevron, !message.read && styles.bold]}>
          {'>'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ff000099',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  avatarText: {
    color: 'white',
  },
  avatarRead: {
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
  },
  chevron: {
    color: 'red',
    fontSize: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  title: {},
  subTitle: {
    color: 'grey',
    fontSize: 11,
    fontStyle: 'italic',
  },
});
