import { View, Text, Image } from "react-native";
import React from "react";

import { images } from "../constants";
import { router } from "expo-router";
import CustomBtn from "./CustomBtn";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="font-pmedium text-sm text-gray-100">{title}</Text>
      <Text className="text-sm font-psemibold text-white">{subtitle}</Text>

      <CustomBtn
        title={"Create Video"}
        handlepress={() => router.push("/create")}
        containerStyles="w-full mt-5"
      />
    </View>
  );
};

export default EmptyState;
