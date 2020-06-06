/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import combinedReducers from './redux';
import EntryPoint from './screens/EntryPoint';
import ThemedApp from './ui/theme';

enableScreens();

export const LocalizationContext = React.createContext(null);

// the props are sent from
const SeetingApp = (props: any) => {
  const store = configureStore({
    reducer: combinedReducers
  });

  return (
    <ThemedApp>
      <Provider store={store}>
        <EntryPoint {...props} />
      </Provider>
    </ThemedApp>
  );
};

export default SeetingApp;
