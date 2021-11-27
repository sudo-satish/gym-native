/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import {
  Center,
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
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import {
  ActivityIndicator,
  DrawerLayoutAndroid,
  Linking,
  Platform,
} from 'react-native';
import LoginPage from './src/pages/login';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {PERSISTENCE_KEY} from './src/store/constants';
import StatisticsPage from './src/pages/statics';
import ReelsPage from './src/pages/reels';

// const initialRoute = 'Login';
const initialRoute = 'Dashboard';
const Stack = createNativeStackNavigator();

const App = () => {
  const drawer = useRef<any>(null);
  const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);
  const [isLoadingInitialState, setIsLoadingInitialState] =
    React.useState(true);
  const [initialState, setInitialState] = React.useState();
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  const {getItem: getUserRole} = useAsyncStorage('userRole');
  const {getItem: getAccessToken} = useAsyncStorage('accessToken');
  const [showScanner, setShowScanner] = useState(false);

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  const navigationView = () => (
    <VStack>
      <Drawer drawer={drawer} />
    </VStack>
  );

  useEffect(() => {
    getUserRole().then(userRole => {
      if (userRole) {
        JSON.parse(userRole);
        console.log({userRole});
      }
    });

    getAccessToken().then(accessToken => {
      console.log(accessToken);
      if (accessToken) {
        setIsSignedIn(true);
        setIsLoadingInitialState(false);
      }
    });
  }, [getUserRole, getAccessToken]);

  if (!isReady) {
    return <ActivityIndicator />;
  }
  if (isLoadingInitialState) {
    return <ActivityIndicator />;
  }

  const ManagerPanel = (
    <>
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
      <Stack.Screen
        name="StatisticsPage"
        options={{title: 'Statistic'}}
        component={StatisticsPage}
      />
      <Stack.Screen
        name="ReelsPage"
        options={{title: 'Reels', headerShown: false}}
        component={ReelsPage}
      />
    </>
  );

  const MemberPanel = (
    <>
      <Stack.Screen
        name="Dashboard"
        component={props => <Center>Members Panel</Center>}
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
    </>
  );

  const getPanel = () => {
    // Return panel based on Role
    // return MemberPanel;
    return ManagerPanel;
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer
        initialState={initialState}
        onStateChange={state =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }>
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          renderNavigationView={navigationView}>
          <Stack.Navigator
            initialRouteName={initialRoute}
            screenOptions={{
              headerStyle: {
                backgroundColor: '#7c3aed',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            {isSignedIn ? (
              getPanel()
            ) : (
              <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{headerShown: false}}
              />
            )}
          </Stack.Navigator>
        </DrawerLayoutAndroid>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
