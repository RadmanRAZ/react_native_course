import { View, Text, FlatList } from "react-native";
import React from "react";

const Trending = ({ item }) => {
  return (
    <View>
      <FlatList
        data={item}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-gray-100 text-lg font-pregular mb-3">
            {item.id}
          </Text>
        )}
        horizontal
      />
    </View>
  );
};

export default Trending;
