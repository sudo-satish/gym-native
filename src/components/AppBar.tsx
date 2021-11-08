import React from 'react';
import {
  HStack,
  IconButton,
  Box,
  Text,
  StatusBar,
  HamburgerIcon,
  Image,
} from 'native-base';
import {Pressable} from 'react-native';

function AppBar({drawer}: {drawer: any}) {
  return (
    <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="#6200ee" />
      <HStack
        bg="#6200ee"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center">
        <HStack space="4" alignItems="center">
          <IconButton
            icon={<HamburgerIcon name="menu" color="white" />}
            onPress={() => drawer.current.openDrawer()}
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Hype GYM
          </Text>
        </HStack>
        <HStack space="2">
          <Pressable>
            <Image
              size={30}
              mr={5}
              alt="fallback text"
              source={require('../assets/images/qr.png')}
              fallbackSource={{
                uri: 'https://www.w3schools.com/css/img_lights.jpg',
              }}
            />
          </Pressable>
        </HStack>
      </HStack>
    </>
  );
}

export default AppBar;