import React, {useState} from 'react';
import {
  Box,
  Button,
  Divider,
  Heading,
  Icon,
  Input,
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import DatePicker from 'react-native-datepicker';

function SearchBar() {
  return (
    <VStack
      space={5}
      mt={5}
      mb={5}
      width="100%"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }>
      <VStack width="100%" space={5} alignItems="center">
        <Heading fontSize="lg">Assign Trainer</Heading>
        <Input
          placeholder="Search Trainer"
          bg="#fff"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          _web={{
            _focus: {borderColor: 'muted.300', style: {boxShadow: 'none'}},
          }}
          InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" />}
        />
      </VStack>
    </VStack>
  );
}

const MembershipForm = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <Stack
      mt={3}
      w={{
        base: '100%',
        md: '25%',
      }}>
      <ScrollView>
        <Box shadow={5} bg="white" p={5}>
          <Text letterSpacing="2xl" pb="3">
            Membership Start Date
          </Text>
          <DatePicker
            style={{width: 200}}
            date={fromDate}
            mode="date"
            placeholder="From date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={date => {
              setFromDate(date);
            }}
          />
        </Box>
        <Box shadow={5} bg="white" mt={4} p={5}>
          <Text letterSpacing="2xl" pb="3">
            Membership End Date
          </Text>
          <DatePicker
            style={{width: 200}}
            date={toDate}
            mode="date"
            placeholder="From date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date: any) => {
              setToDate(date);
            }}
          />
        </Box>

        <SearchBar />
        <Button size="sm" variant="subtle" shadow={3}>
          Next
        </Button>
      </ScrollView>
    </Stack>
  );
};

export default MembershipForm;
