import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, MessageScreen} from '../screens';
import {RootNavigatorParamsList} from '../types/types';

const RootStack = createStackNavigator<RootNavigatorParamsList>();

const RootNavigator: React.FC = () => {
  const {Navigator, Screen} = RootStack;

  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Message" component={MessageScreen} />
    </Navigator>
  );
};

export default RootNavigator;
