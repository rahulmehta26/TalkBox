import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import "./global.css";
import Navigation from "./src/navigations/Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Chat, OverlayProvider,} from "stream-chat-expo";
import { StreamChat } from "stream-chat";

const client = StreamChat.getInstance("wknmbkx5xqp3");

const App = () => {

  return (
    <OverlayProvider>
      <Chat client={client}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigation />
      </GestureHandlerRootView>
      </Chat>
      </OverlayProvider>
  );
};

export default App;
