import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>Hello mom</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default RootLayout;
