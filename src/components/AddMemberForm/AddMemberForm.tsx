import React from 'react';
import {Avatar, Button, Center, ScrollView, Stack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import InputField from '../../core/InputField/InputField';
const AddMemberForm = () => {
  const navigation = useNavigation();
  return (
    <Stack
      mt={3}
      w={{
        base: '100%',
        md: '25%',
      }}>
      <ScrollView>
        <Center mt="2" mb="3">
          <Avatar size="2xl">SS</Avatar>
        </Center>

        <InputField name="firstName" label="First Name" />
        <InputField name="lastName" label="Last Name" />
        <InputField name="mobile" label="Mobile Number" />
        <InputField name="age" label="Age" keyboardType="number-pad" />

        <Button
          size="sm"
          variant="subtle"
          onPress={() => navigation.navigate('AddMembership' as any)}>
          Next
        </Button>
      </ScrollView>
    </Stack>
  );
};

export default AddMemberForm;
