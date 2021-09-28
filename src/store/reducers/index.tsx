import {combineReducers} from 'redux';
import {messagesReducer} from './messages.reducer';

export const rootReducer = combineReducers({
  messages: messagesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
