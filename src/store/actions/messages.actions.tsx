import {
  ADD_MESSAGES,
  READ_MESSAGE,
  FETCH_FAILURE,
  FETCH_REQUEST,
  FetchActionTypes,
} from '../types';
import {messagesService} from '../../services/messages.service';
import {MessageInterface, MessagesActionTypes} from '../types';
import {ActionCreator} from 'redux';

const addMessagesSuccess: ActionCreator<MessagesActionTypes> = (
  messages: MessageInterface[],
) => {
  return {type: ADD_MESSAGES, payload: messages};
};

const readMessageSuccess: ActionCreator<MessagesActionTypes> = (
  message: MessageInterface,
) => {
  return {type: READ_MESSAGE, payload: message};
};

export const request: ActionCreator<FetchActionTypes> = () => {
  return {type: FETCH_REQUEST};
};

export const failure: ActionCreator<FetchActionTypes> = (error: any) => {
  return {type: FETCH_FAILURE, payload: error};
};

export function addMessages(start: number) {
  return dispatch => {
    dispatch(request());
    return messagesService.addMessages(start).then(
      response => {
        dispatch(addMessagesSuccess(response));
      },
      error => {
        dispatch(failure('Server error.'));
      },
    );
  };
}

export function readMessage(messageId: string) {
  return dispatch => {
    dispatch(request());
    return messagesService.readMessage(messageId).then(
      response => {
        dispatch(readMessageSuccess(response));
      },
      error => {
        dispatch(failure('Server error.'));
      },
    );
  };
}
