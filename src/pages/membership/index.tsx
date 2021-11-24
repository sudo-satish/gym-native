import {ScrollView} from 'native-base';
import React from 'react';
import Card from '../../components/Card/Card';

const MembershipPage = () => {
  return (
    <>
      <ScrollView horizontal>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </>
  );
};

export default MembershipPage;
