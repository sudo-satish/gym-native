/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NativeBaseProvider} from 'native-base';
import LoginPage from './src/pages/login';

const App = () => {
  return (
    <NativeBaseProvider>
      <LoginPage />
    </NativeBaseProvider>
  );
};

export default App;
