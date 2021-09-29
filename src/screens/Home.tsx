import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MessageItem} from '../components/MessageItem';
import {RootState} from '../store';
import {addMessages} from '../store/actions/messages.actions';
import {RootNavigatorParamsList} from '../types/types';

export interface HomeScreenProps {
  navigation: StackNavigationProp<RootNavigatorParamsList, 'Home'>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {messages} = useSelector((state: RootState) => state.messages);

  const updateMessages = (start: number) => {
    dispatch(addMessages(start));
  };

  useEffect(() => {
    if (messages.length === 0) {
      updateMessages(0);
    }
  }, []);

  return (
    <FlatList
      data={messages}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <MessageItem message={item} navigation={navigation} />
      )}
    />
  );
};
