import {
  MessageInterface,
  MessagesActionTypes,
  ADD_MESSAGE,
  MARK_MESSAGE_READ,
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
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case MARK_MESSAGE_READ:
      return {
        ...state,
        messages: state.messages.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                read: true,
              }
            : item,
        ),
      };

    default:
      return state;
  }
}
