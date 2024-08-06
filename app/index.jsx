import { View, Text, Image, ScrollView } from "react-native";
import { Stack } from "expo-router";

const Welcome = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Welcome;
