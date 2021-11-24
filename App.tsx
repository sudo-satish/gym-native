/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {
  HamburgerIcon,
  HStack,
  IconButton,
  Image,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import LoginPage from './src/pages/login';
import DashboardPage from './src/pages/dashboard';
import MembersPage from './src/pages/members';
import TrainersPage from './src/pages/trainers';
import MembershipPage from './src/pages/membership';
import DailyActivitiesPage from './src/pages/dailyactivities';
import AddMemberPage from './src/pages/addmember';
import AddMembershipPage from './src/pages/addmembership';
import ContactUsPage from './src/pages/contactus';
import FeedbackPage from './src/pages/feedback';
import AddTrainerPage from './src/pages/addtrainer';
import Drawer from './src/components/Drawer/Drawer';
import {DrawerLayoutAndroid} from 'react-native';

const Stack = createNativeStackNavigator();
const App = () => {
  const drawer = useRef<any>(null);
  const [showScanner, setShowScanner] = useState(false);
  const navigationView = () => (
    <VStack>
      <Drawer drawer={drawer} />
    </VStack>
  );
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          renderNavigationView={navigationView}>
          <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#7c3aed',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen
              name="Dashboard"
              component={props => (
                <DashboardPage {...props} {...{showScanner, setShowScanner}} />
              )}
              options={{
                headerTitle: () => (
                  <HStack space="4" alignItems="center">
                    <IconButton
                      icon={<HamburgerIcon name="menu" color="white" />}
                      onPress={() => drawer.current.openDrawer()}
                    />
                    <Text color="white" fontSize="20" fontWeight="bold">
                      Hype GYM
                    </Text>
                  </HStack>
                ),
                headerRight: () => (
                  <Pressable onPress={() => setShowScanner(true)}>
                    <Image
                      size={30}
                      mr={5}
                      alt="fallback text"
                      source={require('./src/assets/images/qr.png')}
                      fallbackSource={{
                        uri: 'https://www.w3schools.com/css/img_lights.jpg',
                      }}
                    />
                  </Pressable>
                ),
              }}
            />
            <Stack.Screen name="Members" component={MembersPage} />
            <Stack.Screen name="Trainers" component={TrainersPage} />
            <Stack.Screen
              name="AddMember"
              options={{title: 'Add Member'}}
              component={AddMemberPage}
            />
            <Stack.Screen
              name="AddMembership"
              options={{title: 'Membership Details'}}
              component={AddMembershipPage}
            />
            <Stack.Screen
              name="ContactUs"
              options={{title: 'Contact Us'}}
              component={ContactUsPage}
            />
            <Stack.Screen
              name="Feedback"
              options={{title: 'Feedback'}}
              component={FeedbackPage}
            />
            <Stack.Screen
              name="AddTrainer"
              options={{title: 'Add Trainer'}}
              component={AddTrainerPage}
            />
            <Stack.Screen
              name="DailyActivities"
              options={{title: 'Daily Activities'}}
              component={DailyActivitiesPage}
            />
            <Stack.Screen
              name="MembershipPlans"
              options={{title: 'Membership Plans'}}
              component={MembershipPage}
            />
          </Stack.Navigator>
        </DrawerLayoutAndroid>

        {/* <NativeRouter> */}
        {/* <Routes> */}
        {/* <Route path="/" element={<LoginPage />} /> */}
        {/* <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/trainers" element={<TrainersPage />} />
            <Route path="/member-ship" element={<MembershipPage />} />
            <Route path="/daily-activities" element={<DailyActivitiesPage />} />
            <Route path="/add-member" element={<AddMemberPage />} /> */}
        {/* </Routes> */}
        {/* </NativeRouter> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
