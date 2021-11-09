import { ScrollView } from 'native-base';
import React from 'react';
import Card from '../../components/Card/Card';
import WithDrawer from '../../layouts/WithDrawer';

const MembershipPage = () => {
  return (
    <WithDrawer>
      <ScrollView horizontal>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </WithDrawer>
  );
};

export default MembershipPage;
