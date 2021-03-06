import {Center} from 'native-base';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import AddMemberForm from '../../components/AddMemberForm/AddMemberForm';

const AddMemberPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Center p={3}>
        <AddMemberForm />
      </Center>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddMemberPage;
