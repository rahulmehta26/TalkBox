import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Dashboard/HomeScreen";
import ProfileScreen from "../screens/Dashboard/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, useWindowDimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import ChannelScreen from "../screens/Dashboard/ChannelScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {

   const {width, height} = useWindowDimensions()
  
  return (
<>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Tab.Navigator
      screenOptions={{ 
        headerShown: false, 
      }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Chats',
            tabBarIcon: ({size, color}) => (
              <FontAwesome5 name = 'home' size = {size} color = {color} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({size, color}) => (
              <FontAwesome5 name = 'user-alt' size = {size} color = {color} />
            )
          }}
        />
      </Tab.Navigator>

      </>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Stack.Navigator
      // screenOptions={{
      //   headerShown:false
      // }}
      >

        <Stack.Screen
          name="MainTabs"
          component={MyTabs}
          options={{ headerShown: false }} 
        />

        <Stack.Screen
          name="Channel"
          component={ChannelScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
