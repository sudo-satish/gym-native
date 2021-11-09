import React from 'react';
import QRCode from "react-native-qrcode-generator";

const GymQrCode = ({gymId = '1', ...props}) => {
  return (
    <QRCode
      value={gymId}
      size={50}
      bgColor="black"
      fgColor="white"
      {...props}
    />
  );
}

export default GymQrCode;
