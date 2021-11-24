import {Center, ScrollView} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';

const FeedbackPage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Center flex={1}>
          <FeedbackForm />
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedbackPage;
