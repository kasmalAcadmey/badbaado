import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import Home from "./Screen/Home";
import Bback from "./Screen/Bback";
import { Entypo } from "@expo/vector-icons";
import Contact from "./Screen/Contact";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
    // tabBarOptions={{
    //   style: {
    //     height: 55,
    //     borderTopWidth: 0,
    //     elevation: 0,
    //   },
    //   showLabel: false,
    //   activeTintColor: "green",
    // }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="phone-call" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Bback"
        component={Bback}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="back" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
