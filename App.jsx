import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import "./global.css";
import Navigation from "./src/navigations/Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";


const App = () => {

  return (

    <GestureHandlerRootView style = {{flex:1}} >

      <Navigation />
    </GestureHandlerRootView>


  );
};


export default App;
