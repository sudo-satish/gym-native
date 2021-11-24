import React from 'react';
import {Text, Center} from 'native-base';
import GymQrCode from '../../components/GymQrCode/GymQrCode';
import MembersList from '../../components/MembersList/MembersList';
import GymQrCodeScanner from '../../components/GymQrCodeScanner/GymQrCodeScanner';

const DashboardPage = ({showScanner, setShowScanner}: any) => {
  // const [qrCodeText, setQrCodeText] = useState('');
  const onSuccess = (_: any) => {
    setShowScanner(false);
    // setQrCodeText(e.data);
  };
  return (
    <>
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
    </>
  );
};

export default DashboardPage;
