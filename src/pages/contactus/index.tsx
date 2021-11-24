import {Box, HStack, Text, VStack} from 'native-base';
import React from 'react';

const ContactUsPage = () => {
  return (
    <Box shadow={9} m={3} bg="amber.200">
      <VStack>
        <HStack>
          <Text fontSize="2xl">8130626713</Text>
        </HStack>
        <HStack>
          <Text fontSize="2xl">satishkumr001@gmail.com</Text>
        </HStack>

        <Text>H.No. 5232, Street No. 5, Shyam Colony, FBD</Text>
      </VStack>
    </Box>
  );
};

export default ContactUsPage;
