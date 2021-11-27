import {Box, HStack, Text, VStack} from 'native-base';
import React from 'react';

const ContactUsPage = () => {
  return (
    <Box shadow={9} m={3} p={4} bg="violet.600">
      <VStack>
        <HStack>
          <Text fontSize="2xl" color="white">
            8130626713
          </Text>
        </HStack>
        <HStack>
          <Text fontSize="2xl" color="white">
            satishkumr001@gmail.com
          </Text>
        </HStack>

        <Text color="white">H.No. 5232, Street No. 5, Shyam Colony, FBD</Text>
      </VStack>
    </Box>
  );
};

export default ContactUsPage;
