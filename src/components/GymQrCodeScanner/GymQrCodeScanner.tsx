import { Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const GymQrCodeScanner = ({onSuccess, setShowScanner, showScanner}: any) => {
  if (!showScanner) {
    return null;
  }
  return (
    <QRCodeScanner
      showMarker={true}
      onRead={onSuccess}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.centerText}>
          Scan QR to mark attendance for{' '}
          <Text style={styles.textBold}>{new Date().toLocaleDateString()}</Text>
        </Text>
      }
      bottomContent={
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => setShowScanner(false)}>
          <Text style={styles.buttonText}>Close Scanner</Text>
        </TouchableOpacity>
      }
    />
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

export default GymQrCodeScanner;
