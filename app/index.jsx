import { View, Text, Image, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { images } from "../constants";
import CustomBtn from "../components/CustomBtn";

const Welcome = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center h-full items-center px-4">
          <Image
            source={images.logo}
            className="w-[148px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode="contain"
              className="absolute w-[80px] h-[15px] -bottom-2 -right-4"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            where creativity meets innovation : embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomBtn
            title="Continue with email"
            handlepress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
