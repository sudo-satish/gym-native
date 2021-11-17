import {Center, Heading} from 'native-base';
import React from 'react';
import AddMemberForm from '../../components/AddMemberForm/AddMemberForm';
import WithDrawer from '../../layouts/WithDrawer';
const AddMemberPage = () => {
  return (
    <WithDrawer hideScanIcon>
      <Heading ml="3" mt="4" color="violet.600">
        Add Member
      </Heading>
      <Center px="1">
        <AddMemberForm />
      </Center>
    </WithDrawer>
  );
};

export default AddMemberPage;
