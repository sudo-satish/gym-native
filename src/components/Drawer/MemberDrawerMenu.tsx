import {
  Avatar,
  HStack,
  VStack,
  Text,
  Divider,
  Pressable,
  HamburgerIcon,
} from 'native-base';
import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-generator';

const MemberDrawerMenu = () => {
  return (
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
  );
};

export default MemberDrawerMenu;
