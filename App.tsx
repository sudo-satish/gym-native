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
import {Text} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {NativeRouter, Route, Routes} from 'react-router-native';
// import LoginPage from './src/pages/login';
import DashboardPage from './src/pages/dashboard';

const Topics = () => {
  return <Text>Topics</Text>;
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
};

export default App;
