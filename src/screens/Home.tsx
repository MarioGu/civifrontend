import React, {useEffect, useState} from 'react';
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
  const [start, setStart] = useState<number>(0);

  const updateMessages = () => {
    dispatch(addMessages(start));
  };

  const nextPage = () => {
    if (start < 4) {
      setStart(start + 1);
    }
  };

  useEffect(() => {
    updateMessages();
  }, [start]);

  return (
    <FlatList
      data={messages}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <MessageItem message={item} navigation={navigation} />
      )}
      onEndReached={nextPage}
      onEndReachedThreshold={0.7}
    />
  );
};
