import {Fab, AddIcon} from 'native-base';
import React from 'react';
import MembersList from '../../components/MembersList/MembersList';
import {useNavigation} from '@react-navigation/native';

const MembersPage = () => {
  const navigation = useNavigation();
  return (
    <>
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
    </>
  );
};

export default MembersPage;
