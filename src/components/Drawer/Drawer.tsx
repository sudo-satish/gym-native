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
import ManagerDrawerMenu from './ManagerDrawerMenu';
import MemberDrawerMenu from './MemberDrawerMenu';
import MembershipDetail from './MembershipDetail';


const Drawer = () => {
  const [isMember, setIsMember] = useState(false);
  const [isManager, setIsManager] = useState(true);
  return (
    <VStack space="6" my="2" mx="1">
      <VStack mx="3" my="1" space="2">
        <HStack justifyContent="space-between">
          <HStack space={3} mx="1" my="1">
            <Avatar bg="#6200ee">SG</Avatar>
            <VStack>
              <Text bold color="gray.700">
                Satish Gupta
              </Text>
              <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
                8130626713
              </Text>
            </VStack>
          </HStack>
          <QRCode value={'1'} size={50} bgColor="black" fgColor="white" />
        </HStack>
        {isMember && <MembershipDetail />}
      </VStack>
      {isMember && <MemberDrawerMenu />}
      {isManager && <ManagerDrawerMenu />}
    </VStack>
  );};

export default Drawer;
