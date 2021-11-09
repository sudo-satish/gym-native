import { Fab, AddIcon } from 'native-base';
import React from 'react';
import MembersList from "../../components/MembersList/MembersList";
import WithDrawer from '../../layouts/WithDrawer';

const MembersPage = () => {
  return (
    <WithDrawer hideAppBar>
      <MembersList title="Members" />
      <Fab
        position="absolute"
        size="sm"
        icon={
          <AddIcon color="white" size="sm" />
        }
      />
    </WithDrawer>
  );
};

export default MembersPage;
