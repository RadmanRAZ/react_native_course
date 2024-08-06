import { View, Text, Image, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";

const Welcome = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pblack">Home Page</Text>
      <Link href="/home" style={{ color: "blue" }}>
        Go to tabs
      </Link>
    </View>
  );
};

export default Welcome;
