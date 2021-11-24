import {Fab, AddIcon} from 'native-base';
import React from 'react';
import MembersList from '../../components/MembersList/MembersList';
import WithDrawer from '../../layouts/WithDrawer';
import {useNavigation} from '@react-navigation/native';

const MembersPage = () => {
  const navigation = useNavigation();
  return (
    <WithDrawer hideAppBar>
      <MembersList title="Members" />
      <Fab
        position="absolute"
        size="sm"
        onPress={() => {
          navigation.navigate('AddMember' as any);
        }}
        bgColor="violet.600"
        icon={<AddIcon color="white" size="sm" />}
      />
    </WithDrawer>
  );
};

export default MembersPage;
