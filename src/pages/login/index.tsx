import React from 'react';
import {VStack, FormControl, Input, Center, Button} from 'native-base';

const BuildingAFormExample = () => {
  const [formData, setData] = React.useState<any>({});
  const [errors, setErrors] = React.useState({});
  const [otpSent, setOtpSent] = React.useState(false);

  const validate = () => {
    if (formData?.mobileNumber === undefined) {
      setErrors({
        ...errors,
        mobileNumber: 'Mobile number is required',
      });
      return false;
    } else if (formData?.mobileNumber.length < 3) {
      setErrors({
        ...errors,
        mobileNumber: 'Mobile number is too short',
      });
      return false;
    } else {
      setErrors({
        ...errors,
        mobileNumber: '',
      });
    }
    return true;
  };

  const onSubmit = () => {
    validate() ? setOtpSent(true) : console.log('Validation Failed');
  };

  return (
    <VStack width="90%" mx="3">
      <FormControl isRequired isInvalid={'mobileNumber' in errors}>
        <FormControl.Label _text={{bold: true}}>
          Mobile Number
        </FormControl.Label>
        <Input
          keyboardType="number-pad"
          placeholder="Mobile Number"
          onChangeText={value => setData({...formData, mobileNumber: value})}
        />

        {'mobileNumber' in errors && (
          <FormControl.ErrorMessage
            _text={{fontSize: 'xs', color: 'error.500', fontWeight: 500}}>
            Please enter a valid mobile number
          </FormControl.ErrorMessage>
        )}
      </FormControl>
      {otpSent && (
        <FormControl isRequired isInvalid={'otp' in errors}>
          <FormControl.Label _text={{bold: true}}>Enter OTP</FormControl.Label>
          <Input
            keyboardType="number-pad"
            placeholder="OTP"
            onChangeText={value => setData({...formData, otp: value})}
          />

          {'otp' in errors && (
            <FormControl.ErrorMessage
              _text={{fontSize: 'xs', color: 'error.500', fontWeight: 500}}>
              Please enter a valid OTP
            </FormControl.ErrorMessage>
          )}
        </FormControl>
      )}

      {otpSent ? (
        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
          Verify OTP
        </Button>
      ) : (
        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
          Send OTP
        </Button>
      )}
    </VStack>
  );
};
const LoginPage = () => {
  return (
    <Center flex={1}>
      <BuildingAFormExample />
    </Center>
  );
};

export default LoginPage;
