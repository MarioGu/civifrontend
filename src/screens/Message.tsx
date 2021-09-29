import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootNavigatorParamsList} from '../types/types';
import {StyleSheet, Text} from 'react-native';
import {formatDate} from '../helpers';
import {ScrollView} from 'react-native-gesture-handler';
import {readMessage} from '../store/actions/messages.actions';
import {useDispatch} from 'react-redux';

export interface MessageScreenProps {
  navigation: StackNavigationProp<RootNavigatorParamsList, 'Message'>;
  route: RouteProp<RootNavigatorParamsList, 'Message'>;
}

export const MessageScreen: React.FC<MessageScreenProps> = ({route}) => {
  const {
    params: {message},
  } = route;

  const dispatch = useDispatch();

  const updateMessage = () => {
    dispatch(readMessage(message.id));
  };

  useEffect(() => {
    updateMessage();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.time}>{formatDate(message.timestamp)}</Text>
      <Text style={styles.title}>{message.subject}</Text>
      <Text style={styles.detail}>{message.detail}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 16,
    flex: 1,
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'red',
  },
  title: {
    fontSize: 18,
    paddingVertical: 8,
    fontWeight: 'bold',
  },
  detail: {
    color: 'grey',
    fontSize: 16,
    paddingVertical: 8,
  },
});
