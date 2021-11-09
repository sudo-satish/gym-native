import {
  VStack,
} from 'native-base';
import React, {useRef} from 'react';
import {
  DrawerLayoutAndroid,
} from 'react-native';
import AppBar from '../components/AppBar';
import Drawer from '../components/Drawer/Drawer';

const WithDrawer = ({children, hideAppBar = false, setShowScanner}: any) => {
  const drawer = useRef<any>(null);
  const navigationView = () => (
    <VStack>
      <Drawer />
    </VStack>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      {!hideAppBar && (
        <AppBar drawer={drawer} setShowScanner={setShowScanner} />
      )}
      {children}
    </DrawerLayoutAndroid>
  );
};


export default WithDrawer;

