import React from 'react';
import {VStack, FormControl, Input, Center, Button} from 'native-base';
import ApiService from '../../services/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BuildingAFormExample = () => {
  const [formData, setData] = React.useState<any>({});
  const [errors, setErrors] = React.useState<any>({});
  const [otpSent, setOtpSent] = React.useState(false);

  const validate = () => {
    if (formData?.mobileNumber === undefined) {
      setErrors({
        ...errors,
        mobileNumber: 'Mobile number is required',
      });
      return false;
    } else if (formData?.mobileNumber.length !== 10) {
      setErrors({
        ...errors,
        mobileNumber: 'Mobile number should be of 10 digits',
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
    if (validate()) {
      ApiService.post('/auth/send-otp', formData)
        .then(response => {
          console.log(response.data);
          setOtpSent(true);
        })
        .catch(error => console.error(error.response.data.message));
    }
  };

  const onVerifyOtp = () => {
    ApiService.post('/auth/verify-otp', formData)
      .then(response => {
        const {
          data: {accessToken, user, userRole},
        } = response;
        console.log({accessToken, user, userRole});
        AsyncStorage.setItem('accessToken', accessToken);
        AsyncStorage.setItem('user', JSON.stringify(user));
        AsyncStorage.setItem('userRole', JSON.stringify(userRole));
        setOtpSent(true);
      })
      .catch(error => console.error(error.response.data.message));
  };

  return (
    <VStack width="90%" mx="3">
      <FormControl isRequired isInvalid={errors?.mobileNumber}>
        <FormControl.Label _text={{bold: true}}>
          Mobile Number
        </FormControl.Label>
        <Input
          keyboardType="number-pad"
          placeholder="Mobile Number"
          onChangeText={value => setData({...formData, mobileNumber: value})}
        />

        {errors?.mobileNumber && (
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
        <Button onPress={onVerifyOtp} mt="5" colorScheme="cyan">
          Verify OTP
        </Button>
      ) : (
        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
          Send OTP
        </Button>
      )}

      <Button mt="5" onPress={() => setOtpSent(false)}>
        Cancel
      </Button>
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
