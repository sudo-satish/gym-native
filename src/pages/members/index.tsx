import {Fab, AddIcon} from 'native-base';
import React from 'react';
import {useNavigate} from 'react-router';
import MembersList from '../../components/MembersList/MembersList';
import WithDrawer from '../../layouts/WithDrawer';

const MembersPage = () => {
  let navigate = useNavigate();
  return (
    <WithDrawer hideAppBar>
      <MembersList title="Members" />
      <Fab
        position="absolute"
        size="sm"
        onPress={() => navigate('/add-member')}
        bgColor="violet.600"
        icon={<AddIcon color="white" size="sm" />}
      />
    </WithDrawer>
  );
};

export default MembersPage;
