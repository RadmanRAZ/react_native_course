import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomBtn = ({
  title,
  handlepress,
  containerStyles,
  textStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlepress}
      activeOpacity={0.7}
      className={`bg-secondary-200 rounded-xl min-h-[62px] items-center justify-center ${containerStyles}
      ${isLoading ? "opacity-50" : ""}
      `}
      disabled={isLoading}
    >
      <Text className={`text-primary font-semibold text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;
