import {postToServer} from './http.service';
import {MessageInterface} from '../store/types';

export const messagesService = {
  addMessages,
  readMessage,
};

async function addMessages(start: number): Promise<MessageInterface[]> {
  return await postToServer('/messages', JSON.stringify({start: start}));
}

async function readMessage(messageId: string): Promise<MessageInterface[]> {
  return [];
}
