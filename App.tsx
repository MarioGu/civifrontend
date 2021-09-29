import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import RootNavigator from './src/navigation/Navigator';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar />
        <RootNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
