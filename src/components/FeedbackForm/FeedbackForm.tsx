import {Stack, TextArea} from 'native-base';
import React from 'react';
import InputField from '../../core/InputField/InputField';

const FeedbackForm = () => {
  return (
    <Stack
      w={{
        base: '80%',
        md: '25%',
      }}
      mt={3}>
      <InputField name="title" label="Title" />
      <TextArea
        h={100}
        totalLines={40}
        placeholder="Enter details"
        w={{
          base: '100%',
          md: '25%',
        }}
      />
    </Stack>
  );
};

export default FeedbackForm;
