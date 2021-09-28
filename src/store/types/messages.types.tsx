export interface MessageInterface {
  id: number;
  timestamp: number;
  subject: string;
  detail: string;
}

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const MARK_MESSAGE_READ = 'MARK_MESSAGE_READ';

interface AddMessageAction {
  type: typeof ADD_MESSAGE;
  payload: MessageInterface;
}

interface MarkMessageReadAction {
  type: typeof MARK_MESSAGE_READ;
  payload: MessageInterface;
}

export type MessagesActionTypes = AddMessageAction | MarkMessageReadAction;
