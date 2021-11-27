import React from 'react';
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Pressable,
} from 'native-base';
export const Example = ({title}: {title: string}) => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      mobileNumber: '8130626713',
      fullName: 'Aafreen Khan',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
      membershipExpired: true,
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Sujitha Mathur',
      timeStamp: '11:11 PM',
      recentText: 'Cheer up, there!',
      mobileNumber: '8130626713',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Anci Barroco',
      timeStamp: '6:22 PM',
      recentText: 'Good Day!',
      mobileNumber: '8130626713',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Aniket Kumar',
      timeStamp: '8:56 PM',
      recentText: 'All the best',
      mobileNumber: '8130626713',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      mobileNumber: '8130626713',
      membershipExpired: true,
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
  ];
  return (
    <Box
      mt={5}
      mb={5}
      w={{
        base: '100%',
        md: '25%',
      }}>
      <Heading fontSize="xl" p="4" pb="3">
        {title}
      </Heading>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: 'gray.600',
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2">
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                color="black"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color={
                    item.membershipExpired ? 'coolGray.400' : 'coolGray.800'
                  }
                  bold>
                  {item.fullName}
                </Text>
                <HStack>
                  <Text
                    color={
                      item.membershipExpired ? 'coolGray.400' : 'coolGray.600'
                    }
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.mobileNumber}
                  </Text>
                  {item.membershipExpired && (
                    <Pressable>
                      <Text ml="5" mt="-3" color="red.400">
                        Send Reminder
                      </Text>
                    </Pressable>
                  )}
                </HStack>

                <Text
                  color={
                    item.membershipExpired ? 'coolGray.300' : 'coolGray.500'
                  }
                  fontSize="12"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  {item.membershipExpired
                    ? 'Membership expired on 31st Dec 2021'
                    : 'Membership expires on 31st Dec 2021'}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: 'warmGray.50',
                }}
                color={item.membershipExpired ? 'coolGray.400' : 'coolGray.800'}
                alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

const MembersList = ({title}: {title: string}) => {
  return (
    <NativeBaseProvider>
      <Center flex="1">
        <Example title={title} />
      </Center>
    </NativeBaseProvider>
  );
};

export default MembersList;
