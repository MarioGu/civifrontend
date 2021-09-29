export interface MessageInterface {
  id: number;
  timestamp: number;
  subject: string;
  detail: string;
  read: boolean;
}

export const ADD_MESSAGES = 'ADD_MESSAGES';
export const READ_MESSAGE = 'READ_MESSAGE';

interface AddMessageAction {
  type: typeof ADD_MESSAGES;
  payload: MessageInterface[];
}

interface ReadMessageAction {
  type: typeof READ_MESSAGE;
  payload: number;
}

export type MessagesActionTypes = AddMessageAction | ReadMessageAction;
