import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from 'native-base';

function CardComponent() {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      width="72"
      shadow={1}
      _light={{backgroundColor: 'gray.50'}}
      _dark={{backgroundColor: 'gray.700'}}>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            source={{
              uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _text={{color: 'white', fontWeight: '700', fontSize: 'xs'}}
          position="absolute"
          bottom={0}
          px="3"
          py="1.5">
          POPULAR
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <HStack justifyContent="space-between">
          <Heading size="md" ml="-1">
            Monthly
          </Heading>
          <Heading size="md" ml="-1">
            $600
          </Heading>

          </HStack>
          <Text
            fontSize="xs"
            _light={{color: 'violet.500'}}
            _dark={{color: 'violet.300'}}
            fontWeight="500"
            ml="-0.5"
            mt="-1">
            Access to all machines
          </Text>
        </Stack>
        <Text fontWeight="400">
         Enjoy wide range of machine billed monthly
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="gray.500" fontWeight="400">
              100 members are monthly subscription
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <CardComponent />
      </Center>
    </NativeBaseProvider>
  );
}
