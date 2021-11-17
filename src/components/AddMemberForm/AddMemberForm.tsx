import React from 'react';
import {
  Avatar,
  Button,
  Center,
  Divider,
  FormControl,
  Input,
  ScrollView,
  Stack,
  Text,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';

const InputField = ({label, ...rest}: any) => (
  <FormControl
    mb="6"
    // isInvalid
  >
    <FormControl.Label>
      <Text letterSpacing="2xl">{label}</Text>
    </FormControl.Label>
    <Input
      variant="underlined"
      size="xs"
      placeholder={`Enter ${label}`}
      {...rest}
    />
    {/* <FormControl.ErrorMessage>
          Try different from previous passwords.
        </FormControl.ErrorMessage> */}
  </FormControl>
);
const AddMemberForm = () => {
  return (
    <Stack
      mt={3}
      w={{
        base: '80%',
        md: '25%',
      }}>
      <SafeAreaView>
        <ScrollView>
          <Center mt="2" mb="3">
            <Avatar size="2xl">SS</Avatar>
          </Center>
          {/* <Divider mt="3" mb="3" /> */}

          <InputField name="firstName" label="First Name" />
          <InputField name="lastName" label="Last Name" />
          <InputField name="mobile" label="Mobile Number" />
          <InputField name="age" label="Age" keyboardType="number-pad" />

          <Button size="sm" variant="subtle">
            PRIMARY
          </Button>
        </ScrollView>
      </SafeAreaView>
    </Stack>
  );
};

export default AddMemberForm;
