import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";
import { ChannelList, Chat, OverlayProvider, useChatContext } from "stream-chat-expo";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

  const [channel, setChannel] = useState();

  const { client } = useChatContext();

  const navigation = useNavigation();

  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: "rahu",
          name: "Jim Lahey",
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken("rahu")
      );

      // const channel = client.channel("messaging", "the_park", {
      //   name: "The Park",
      // });

      // await channel.watch();
    };

    connect();
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        
        <CustomSafeAreaView>

          <ChannelList onSelect={(selectedChannel) => {
            // setChannel(selectedChannel); 
            navigation.push("Channel", { channelId: selectedChannel.cid }); 
          }} />

        </CustomSafeAreaView>
      </Chat>
    </OverlayProvider>
  );
};

export default HomeScreen;
