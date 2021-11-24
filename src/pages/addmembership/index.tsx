import {Center} from 'native-base';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import MembershipForm from '../../components/MembershipForm/MembershipForm';

const AddMembershipPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Center p={3}>
        <MembershipForm />
      </Center>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddMembershipPage;
