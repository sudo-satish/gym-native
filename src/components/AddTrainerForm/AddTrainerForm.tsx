import React from 'react';
import {Avatar, Button, Center, Radio, ScrollView, Stack} from 'native-base';
import InputField from '../../core/InputField/InputField';
const AddTrainerForm = () => {
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
        <Radio.Group
          defaultValue="1"
          name="myRadioGroup"
          accessibilityLabel="Pick your favorite number">
          <Radio value="1" my={1}>
            Male
          </Radio>
          <Radio value="2" my={1}>
            Female
          </Radio>
          <Radio value="3" my={1}>
            Other
          </Radio>
        </Radio.Group>

        <Button size="sm" variant="subtle">
          Create
        </Button>
      </ScrollView>
    </Stack>
  );
};

export default AddTrainerForm;
