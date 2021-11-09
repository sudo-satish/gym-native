import {
  HStack,
  VStack,
  Text,
  Divider,
  Pressable,
} from 'native-base';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const menuItemList = [
  {
    title: 'Dashboard',
    helpText: 'Show QR code',
    href: '/dashboard',
  },
  {
    title: 'Members',
    helpText: 'Add/Delete/Edit Members',
    href: '/members',
    isSelected: true,
  },
  {
    title: 'Trainers',
    helpText: 'Add/Delete/Edit Trainers',
    href: '/trainers',
  },
];

const manageGymMenuItems = [
  {
    title: 'Daily Activity',
    helpText: 'Manage activities like Yoga, Bhangra',
    href: '',
    isSelected: false,
  },
  {
    title: 'Membership Plans',
    helpText: 'Manage membership plans',
    href: '/member-ship',
  },
  {
    title: 'Statistics',
    helpText: 'Statistics like new members count of this month',
    href: '',
  },
  {
    title: 'About Branch',
    helpText: 'Share branch location or contact details via whatsapp',
    href: '',
  },
];
const ManagerDrawerMenu = () => {
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <VStack divider={<Divider />} space="4">
      <VStack space="3">
        {menuItemList.map(item => {
          const isSelected = location.pathname === item.href;
          return (
            <Pressable
              px="5"
              py="1"
              rounded="md"
              bg={isSelected ? 'rgba(6, 182, 212, 0.1)' : ''}
              onPress={event => {
                item.href ? navigate(item.href) : null;
              }}>
              <HStack space="7" alignItems="center">
                {/* <HamburgerIcon color={'primary.500'} size="5" /> */}
                <VStack>
                  <Text
                    fontWeight="500"
                    color={isSelected ? 'violet.500' : 'gray.700'}>
                    {item.title}
                  </Text>
                  <Text
                    fontWeight="300"
                    fontSize={12}
                    color={isSelected ? 'violet.500' : 'gray.700'}>
                    {item.helpText}
                  </Text>
                </VStack>
              </HStack>
            </Pressable>
          );
        })}
      </VStack>
      <VStack space="5">
        {/* <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
          Manage GYM
        </Text> */}
        <VStack space="3">
          {manageGymMenuItems.map(item => {
            const isSelected = location.pathname === item.href;
            return (
            <Pressable
              px="5"
              py="1"
              rounded="md"
              bg={isSelected ? 'rgba(6, 182, 212, 0.1)' : ''}
              onPress={event => {
                item.href ? navigate(item.href) : null;
              }}>
              <HStack space="7" alignItems="center">
                {/* <HamburgerIcon color={'primary.500'} size="5" /> */}
                <VStack>
                  <Text
                    fontWeight="500"
                    color={isSelected ? 'violet.500' : 'gray.700'}>
                    {item.title}
                  </Text>
                  <Text
                    fontWeight="300"
                    fontSize={12}
                    color={isSelected ? 'violet.500' : 'gray.700'}>
                    {item.helpText}
                  </Text>
                </VStack>
              </HStack>
            </Pressable>
          )})}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ManagerDrawerMenu;
