import {HStack, VStack, Text, Divider, Pressable} from 'native-base';
import {ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const menuItemList = [
  {
    title: 'Dashboard',
    helpText: 'Show QR code',
    href: 'Dashboard',
  },
  {
    title: 'Members',
    helpText: 'Add/Delete/Edit Members',
    href: 'Members',
    isSelected: true,
  },
  {
    title: 'Trainers',
    helpText: 'Add/Delete/Edit Trainers',
    href: 'Trainers',
  },
];

const manageGymMenuItems = [
  {
    title: 'Daily Activity',
    helpText: 'Manage activities like Yoga, Bhangra',
    href: '/daily-activities',
    isSelected: false,
  },
  {
    title: 'Membership Plans',
    helpText: 'Manage membership plans',
    href: '/member-ship',
  },
  // {
  //   title: 'Statistics',
  //   helpText: 'Statistics like new members count of this month',
  //   href: '',
  // },
  {
    title: 'About Branch',
    helpText: 'Share branch location or contact details via whatsapp',
    href: '',
  },
];
const ManagerDrawerMenu = () => {
  const navigation = useNavigation();
  // let navigate = useNavigate();
  // let location = useLocation();
  return (
    <ScrollView
      _contentContainerStyle={{
        px: '20px',
        mb: '4',
        minW: '72',
      }}>
      <VStack divider={<Divider />} space="4" flex="1" mb={20}>
        <VStack space="3">
          {menuItemList.map(item => {
            const isSelected = false;
            return (
              <Pressable
                px="5"
                py="1"
                rounded="md"
                bg={isSelected ? 'rgba(6, 182, 212, 0.1)' : ''}
                onPress={_ => {
                  item.href ? navigation.navigate(item.href) : null;
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
              const isSelected = false;
              return (
                <Pressable
                  px="5"
                  py="1"
                  rounded="md"
                  bg={isSelected ? 'rgba(6, 182, 212, 0.1)' : ''}
                  onPress={_ => {
                    item.href ? navigation.navigate(item.href) : null;
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
        </VStack>
        <Pressable
          px="5"
          py="1"
          rounded="md"
          onPress={_ => {
            navigation.navigate('ContactUs');
          }}>
          <HStack space="7" alignItems="center">
            {/* <HamburgerIcon color={'primary.500'} size="5" /> */}
            <VStack>
              <Text fontWeight="500" color={'gray.700'}>
                Contact Us
              </Text>
              <Text fontWeight="300" fontSize={12} color={'gray.700'}>
                Reach out to us in case you need any help
              </Text>
            </VStack>
          </HStack>
        </Pressable>
        <Pressable
          px="5"
          py="1"
          rounded="md"
          onPress={_ => {
            navigation.navigate('Feedback');
          }}>
          <HStack space="7" alignItems="center">
            {/* <HamburgerIcon color={'primary.500'} size="5" /> */}
            <VStack>
              <Text fontWeight="500" color={'gray.700'}>
                Feedback
              </Text>
              <Text fontWeight="300" fontSize={12} color={'gray.700'}>
                Help us to improve
              </Text>
            </VStack>
          </HStack>
        </Pressable>
      </VStack>
    </ScrollView>
  );
};

export default ManagerDrawerMenu;
