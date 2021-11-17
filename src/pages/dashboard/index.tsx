import {Text, Center} from 'native-base';
import React, {useState} from 'react';
// import {StyleSheet} from 'react-native';
import GymQrCode from '../../components/GymQrCode/GymQrCode';
import MembersList from '../../components/MembersList/MembersList';
import GymQrCodeScanner from '../../components/GymQrCodeScanner/GymQrCodeScanner';
import WithDrawer from '../../layouts/WithDrawer';

const DashboardPage = () => {
  // const [qrCodeText, setQrCodeText] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const onSuccess = (_: any) => {
    setShowScanner(false);
    // setQrCodeText(e.data);
  };
  return (
    <WithDrawer setShowScanner={setShowScanner}>
      <GymQrCodeScanner {...{onSuccess, showScanner, setShowScanner}} />
      {!showScanner && (
        <>
          <Center mt="10">
            <GymQrCode size={150} gymId={'10'} />
            <Text>{new Date().toLocaleDateString()}</Text>
          </Center>
          <MembersList title="Attendance" />
        </>
      )}
    </WithDrawer>
  );
};

export default DashboardPage;
