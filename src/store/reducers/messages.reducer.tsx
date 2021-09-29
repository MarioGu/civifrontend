import {
  MessageInterface,
  MessagesActionTypes,
  ADD_MESSAGES,
  READ_MESSAGE,
} from '../types';

interface MessagesState {
  messages: MessageInterface[];
}

const initialState: MessagesState = {
  messages: [],
};

export function messagesReducer(
  state: MessagesState = initialState,
  action: MessagesActionTypes,
): MessagesState {
  switch (action.type) {
    case ADD_MESSAGES:
      return {
        ...state,
        messages: [...action.payload, ...state.messages],
      };

    case READ_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(item => {
          return item.id === action.payload ? {...item, read: true} : item;
        }),
      };

    default:
      return state;
  }
}
