import React from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Authentication/LoginScreen';
import BookingsScreen from './screens/Bookings/BookingsScreen';
import RegisterScreen from './screens/Authentication/RegisterScreen';
import HistoryScreen from './screens/History/HistoryScreen';
import SocialScreen from './screens/Social/SocialScreen';
import SettingsScreen from './screens/Settings/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstTimeSetupScreen from './screens/Authentication/FirstTimeSetupScreen';
import BlocksScreen from './screens/Bookings/BlocksScreen';
import FacilitiesScreen from './screens/Bookings/FacilitiesScreen';
import AmendScreen from './screens/History/AmendScreen';
import PostScreen from './screens/Social/PostScreen';
import ProfileScreen from './screens/Settings/ProfileScreen';
import BookScreen from './screens/Bookings/BookScreen';
import FirstTimeSetupHallScreen from './screens/Authentication/FirstTimeSetupHallScreen';
import FirstTimeSetupBlockScreen from './screens/Authentication/FirstTimeSetupBlockScreen';
import FirstTimeSetupLevelScreen from './screens/Authentication/FirstTimeSetupLevelScreen';
import CommonFacilitiesScreen from './screens/Bookings/CommonFacilitiesScreen';
import ExistingBookingsScreen from './screens/Bookings/ExistingBookingsScreen';
import ExistingBookingsOnDayScreen from './screens/Bookings/ExistingBookingsOnDayScreen';
import ChangePasswordScreen from './screens/Settings/ChangePasswordScreen';
import EditNameScreen from './screens/Settings/EditNameScreen';
import EditEmailScreen from './screens/Settings/EditEmailScreen';
import EditHallScreen from './screens/Settings/EditHallScreen';
import EditBlockScreen from './screens/Settings/EditBlockScreen';
import EditLevelScreen from './screens/Settings/EditLevelScreen';
// import GoogleSetupScreen from './screens/Authentication/GoogleSetupScreen';

// Tab Navigator for tabs after login - booking, history, social, setting. Shows a menu bar at the bottom of screen
const Tabs = createBottomTabNavigator();
// Stack navigator for authentication - to navigate between login, registering, additional details and then main tabs
const Stack = createNativeStackNavigator();
// Stack navigator for pages within the bookings tab
const BookingsStack = createNativeStackNavigator();
// Stack navigator for pages within the history tab
const HistoryStack = createNativeStackNavigator();
// Stack navigator for pages within the social tab
const SocialStack = createNativeStackNavigator();
// Stack navigator for pages within the settings tab
const SettingsStack = createNativeStackNavigator();

// pages within bookings
function BookingTab() {
  return (
    <BookingsStack.Navigator>
      <BookingsStack.Screen name="Hall" component={BookingsScreen}/>
      <BookingsStack.Screen name="Block" component={BlocksScreen}/>
      <BookingsStack.Screen name="Block Facilities" component={FacilitiesScreen}/>
      <BookingsStack.Screen name="Common Facilities" component={CommonFacilitiesScreen}/>
      <BookingsStack.Screen name="Book" component={BookScreen}/>
      <BookingsStack.Screen name="Date" component={ExistingBookingsScreen}/>
      <BookingsStack.Screen name="Existing Bookings" component={ExistingBookingsOnDayScreen}/>
    </BookingsStack.Navigator>
  );
}

//pages within history
function HistoryTab() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="Bookings" component={HistoryScreen}/>
      <HistoryStack.Screen name="Amend" component={AmendScreen}/>
    </HistoryStack.Navigator>
  );
}

// pages within social
function SocialTab() {
  return (
    <SocialStack.Navigator>
      <SocialStack.Screen name="Feed" component={SocialScreen}/>
      <SocialStack.Screen name="Post" component={PostScreen}/>
    </SocialStack.Navigator>
  );
}

// pages within settings
function SettingsTab() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Menu" component={SettingsScreen}/>
      <SettingsStack.Screen name="Profile" component={ProfileScreen}/>
      <SettingsStack.Screen name="Change Password" component={ChangePasswordScreen}/>
      <SettingsStack.Screen name="Edit Name" component={EditNameScreen}/>
      <SettingsStack.Screen name="Edit Email" component={EditEmailScreen}/>
      <SettingsStack.Screen name="Edit Hall" component={EditHallScreen}/>
      <SettingsStack.Screen name="Edit Block" component={EditBlockScreen}/>
      <SettingsStack.Screen name="Edit Level" component={EditLevelScreen}/>
    </SettingsStack.Navigator>
  );
}

// main tabs, only accessible after login
// do not show header
function AfterLoginTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Bookings" component={BookingTab} options={{ 
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
            <Image 
              source={require('./assets/bookings.png')} 
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#0782F9' : 'black',
                marginBottom: 5
              }}
            />
          </View>
        )
        }}/>
      <Tabs.Screen name="History" component={HistoryTab} options={{ 
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
            <Image 
              source={require('./assets/history.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#0782F9' : 'black',
                marginBottom: 5
              }}
            />
          </View>
        )
        }}/>
      <Tabs.Screen name="Social" component={SocialTab} options={{ 
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
            <Image 
              source={require('./assets/social.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#0782F9' : 'black',
                marginBottom: 5
              }}
            />
          </View>
        )
        }}/>
      <Tabs.Screen name="Settings" component={SettingsTab} options={{ 
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
            <Image 
              source={require('./assets/settings.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#0782F9' : 'black',
                marginBottom: 5
              }}
            />
          </View>
        )
        }}/>
    </Tabs.Navigator>
  );  
}

// navigates between authentication to the main tabs
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen options={{headerShown:false}} name="FirstTimeSetupScreen" component={FirstTimeSetupScreen} />
        <Stack.Screen options={{headerShown:false}} name="FirstTimeSetupHallScreen" component={FirstTimeSetupHallScreen} />
        <Stack.Screen options={{headerShown:false}} name="FirstTimeSetupBlockScreen" component={FirstTimeSetupBlockScreen} />
        <Stack.Screen options={{headerShown:false}} name="FirstTimeSetupLevelScreen" component={FirstTimeSetupLevelScreen} />
        <Stack.Screen options={{headerShown:false}} name="AfterLogin" component={AfterLoginTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
// default style within app, not used here
// for reference 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/