/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text} from 'native-base';
import {NativeBaseProvider, Center} from 'native-base';
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

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={DashboardPage} />
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
        </Stack.Navigator>

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
