import {
  Text,
  Center,
} from 'native-base';
import React, {useState} from 'react';
import {
  StyleSheet,
} from 'react-native';
import GymQrCode from '../../components/GymQrCode/GymQrCode';
import MembersList from '../../components/MembersList/MembersList';
import GymQrCodeScanner from '../../components/GymQrCodeScanner/GymQrCodeScanner';
import WithDrawer from '../../layouts/WithDrawer';

const DashboardPage = () => {
  const [qrCodeText, setQrCodeText] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const onSuccess = (e: any) => {
    setShowScanner(false);
    setQrCodeText(e.data);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default DashboardPage;
