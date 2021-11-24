import React from 'react';
import {FormControl, Input, Text} from 'native-base';

const InputField = ({label, ...rest}: any) => (
  <FormControl mb="6">
    <FormControl.Label>
      <Text letterSpacing="2xl">{label}</Text>
    </FormControl.Label>
    <Input
      variant="underlined"
      size="md"
      placeholder={`Enter ${label}`}
      {...rest}
    />
  </FormControl>
);

export default InputField;
