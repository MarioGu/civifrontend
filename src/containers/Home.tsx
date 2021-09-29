import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MessageItem} from '../components/MessageItem';
import {RootState} from '../store';
import {addMessages} from '../store/actions/messages.actions';

interface Props {}

export const Home: React.FC<Props> = _ => {
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
      renderItem={({item}) => <MessageItem message={item} />}
    />
  );
};
