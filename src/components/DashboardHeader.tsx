import React from 'react';
import {Text} from 'react-native';
import {VStack} from 'native-base';
import {Link} from 'react-router-native';

const DashboardHeader = () => {
  return (
    <VStack width="90%" mx="3">
      <Link to="/">
        <Text>Login</Text>
      </Link>
      <Link to="/about">
        <Text>About</Text>
      </Link>
      <Link to="/topics">
        <Text>Topics</Text>
      </Link>
    </VStack>
  );
};

export default DashboardHeader;
