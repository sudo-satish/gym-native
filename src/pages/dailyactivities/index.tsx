import React, {useState} from 'react';
import {
  Actionsheet,
  AddIcon,
  Box,
  Button,
  Center,
  Divider,
  Fab,
  Heading,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Text,
  useDisclose,
  View,
  VStack,
} from 'native-base';
import dayjs from 'dayjs';
import WithDrawer from '../../layouts/WithDrawer';
import {Path} from 'react-native-svg';

const days = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
const activities = [
  {
    time: '5:00 PM',
    actionButtonText: 'Zumba',
  },
  {
    time: '6:00 PM',
    actionButtonText: 'Bhangra',
  },
  {
    time: '7:00 PM',
    actionButtonText: 'Yoga',
  },
  {
    time: '8:00 PM',
    actionButtonText: 'Kick Boxing',
  },
];

const Day = ({name, index, selectedDay, setSelectedDay}: any) => {
  const isToday = selectedDay === index + 1;
  return (
    <VStack>
      <Pressable onPress={() => setSelectedDay(index + 1)}>
        <Center
          h="10"
          w="20"
          bg="violet.500"
          borderWidth={isToday ? '2' : '0'}
          borderColor="violet.600"
          mr="3"
          rounded="md"
          shadow={3}>
          <Text color="white">{name}</Text>
        </Center>
      </Pressable>
      {isToday && (
        <Divider mt="2" bg="violet.600" w="20" h="1" rounded="md" shadow={3} />
      )}
    </VStack>
  );
};

const StickyHeading = () => (
  <Heading ml="3" mt="3">
    Activity Timings
  </Heading>
);

const ActivityDetail = ({activity, isOpen, onClose}: any) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
      <Actionsheet.Content>
        <Box w="100%" h={60} px={4} justifyContent="center">
          <Text
            fontSize="16"
            color="gray.500"
            _dark={{
              color: 'gray.300',
            }}>
            {activity.actionButtonText}
          </Text>
        </Box>
        <Actionsheet.Item>Delete</Actionsheet.Item>
        <Actionsheet.Item>Share</Actionsheet.Item>
        <Actionsheet.Item>Play</Actionsheet.Item>
        <Actionsheet.Item>Favourite</Actionsheet.Item>
        <Actionsheet.Item
          p={3}
          startIcon={
            <Icon color="trueGray.400" mr="1" h="24" w="24" viewBox="0 0 24 24">
              <Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" />
            </Icon>
          }>
          Cancel
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
const DailyActivitiesPage = () => {
  const [selectedDay, setSelectedDay] = useState(dayjs().day());
  const [selectedActivity, setSelectedActivity] = useState(activities[0]);
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <WithDrawer hideScanIcon>
      <View m="3">
        <ScrollView horizontal persistentScrollbar>
          {days.map((name, index) => (
            <Day
              key={name}
              name={name}
              selectedDay={selectedDay}
              index={index}
              setSelectedDay={setSelectedDay}
            />
          ))}
        </ScrollView>

        <Fab
          position="absolute"
          size="sm"
          bgColor="violet.600"
          icon={<AddIcon size="sm" />}
        />
      </View>

      <StickyHeading />
      <ScrollView>
        {activities.map((activity, index) => {
          return (
            <VStack key={index} mt="3">
              <HStack mb="2">
                <Center mr="3" ml="5">
                  <Text>{activity.time}</Text>
                </Center>
                <Button
                  size="sm"
                  variant="outline"
                  colorScheme="secondary"
                  onPress={() => {
                    setSelectedActivity(activity);
                    onOpen();
                  }}>
                  {activity.actionButtonText}
                </Button>
              </HStack>
              <Divider />
            </VStack>
          );
        })}
      </ScrollView>
      <ActivityDetail
        {...{isOpen, onOpen, onClose, activity: selectedActivity}}
      />
    </WithDrawer>
  );
};

export default DailyActivitiesPage;
