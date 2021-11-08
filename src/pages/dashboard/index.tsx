import {
  Avatar,
  Box,
  HStack,
  VStack,
  Text,
  Divider,
  Pressable,
  Icon,
  HamburgerIcon,
  Image,
} from 'native-base';
import React, {useRef} from 'react';
import {Button, DrawerLayoutAndroid, StyleSheet, View} from 'react-native';
import AppBar from '../../components/AppBar';
// import DashboardHeader from '../../components/DashboardHeader';

const Drawer = () => (
  <VStack space="6" my="2" mx="1">
    <VStack space="2">
      <HStack space={3} mx="1" my="1">
        <Avatar
          bg="green.500"
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
          }}>
          SG
        </Avatar>
        <VStack>
          <Text bold color="gray.700">
            Satish Gupta
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            8130626713
          </Text>
        </VStack>
      </HStack>
      <Text fontWeight="300">Membership expires on 31st Dec 2021</Text>
    </VStack>
    <VStack divider={<Divider />} space="4">
      <VStack space="3">
        <Pressable
          px="5"
          py="3"
          rounded="md"
          bg={'rgba(6, 182, 212, 0.1)'}
          onPress={event => {
            // props.navigation.navigate(name);
          }}>
          <HStack space="7" alignItems="center">
            <HamburgerIcon color={'primary.500'} size="5" />
            <Text fontWeight="500" color={'primary.500'}>
              Diet Chart
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          px="5"
          py="3"
          rounded="md"
          bg={'transparent'}
          onPress={event => {
            // props.navigation.navigate(name);
          }}>
          <HStack space="7" alignItems="center">
            <HamburgerIcon color={'gray.500'} size="5" />
            <Text fontWeight="500" color={'gray.700'}>
              Training Session
            </Text>
          </HStack>
        </Pressable>
      </VStack>
      <VStack space="5">
        <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
          Labels
        </Text>
        <VStack space="3">
          <Pressable px="5" py="3">
            <HStack space="7" alignItems="center">
              <HamburgerIcon color="gray.500" size="5" />
              <Text color="gray.700" fontWeight="500">
                Family
              </Text>
            </HStack>
          </Pressable>
          <Pressable px="5" py="2">
            <HStack space="7" alignItems="center">
              <HamburgerIcon color="gray.500" size="5" />
              <Text color="gray.700" fontWeight="500">
                Friends
              </Text>
            </HStack>
          </Pressable>
          <Pressable px="5" py="3">
            <HStack space="7" alignItems="center">
              <HamburgerIcon color="gray.500" size="5" />
              <Text fontWeight="500" color="gray.700">
                Work
              </Text>
            </HStack>
          </Pressable>
        </VStack>
      </VStack>
    </VStack>
  </VStack>
);
const DashboardPage = () => {
  const drawer = useRef<any>(null);
  const navigationView = () => (
    <VStack>
      <Drawer />
      {/* <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      /> */}
    </VStack>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <AppBar drawer={drawer} />
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default DashboardPage;
