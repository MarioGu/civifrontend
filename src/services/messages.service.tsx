import {postToServer} from './http.service';
import {MessageInterface} from '../store/types';

export const messagesService = {
  addMessages,
  readMessage,
};

async function addMessages(start: number): Promise<MessageInterface[]> {
  const messages = await postToServer(
    '/messages',
    JSON.stringify({start: start}),
  );
  return messages.reverse();
}

async function readMessage(messageId: number): Promise<number> {
  return messageId;
}
