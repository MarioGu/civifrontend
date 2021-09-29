import {MessageInterface} from '../store';

export type MessageParamList = {
  message: MessageInterface;
};

export type RootNavigatorParamsList = {
  Home: undefined;
  Message: MessageParamList;
};
