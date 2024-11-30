import {
  View,
  Text,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  MessageInput,
  MessageList,
  Channel,
  useChatContext,
} from "stream-chat-expo";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";

const ChannelScreen = ({ route }) => {
  const [channel, setChannel] = useState(null);

  const { width, height } = useWindowDimensions();

  const { channelId } = route.params;

  const { client } = useChatContext();

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await client.queryChannels({ cid: channelId });

      setChannel(res[0]);
    };

    fetchChannel();
  }, [channelId]);

  if (!channel) {
    return <ActivityIndicator size={"large"} color="black" />;
  }

  return (
    <Channel channel={channel}>
      <CustomSafeAreaView>
        <MessageList />
        <MessageInput />
      </CustomSafeAreaView>
    </Channel>
  );
};

export default ChannelScreen;
