import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { Video, ResizeMode } from "expo-av";
import { icons } from "../../constants";
import CustomBtn from "../../components/CustomBtn";
import * as DocumentPicker from "expo-document-picker";
import { router } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";

import { createVideoPost } from "../../lib/appwrite";

const Create = () => {
  const { user } = useGlobalContext();
  const [form, setform] = useState({
    title: "",
    video: "",
    thumnail: "",
    prompt: "",
  });

  const openPicker = async (selectedType) => {
    const result = await DocumentPicker.getDocumentAsync({
      type:
        selectedType === "image"
          ? ["image/png", "image/jpg"]
          : ["video/mp4", "video/gif"],
    });
    if (!result.canceled) {
      if (selectedType === "image") {
        setform({ ...form, thumnail: result.assets[0] });
      }
      if (selectedType === "video") {
        setform({ ...form, video: result.assets[0] });
      }
    } else {
    }
  };

  const submit = async () => {
    if (!form.video | !form.prompt | form.thumnail | form.title) {
      return Alert.alert("please fill the essentials");
    }
    setupload(true);
    try {
      await createVideoPost({ ...form, userId: user.$id });

      Alert.alert("pose uploaded succsessfully");
      router.push("/home");
    } catch (error) {
      Alert.alert("ERROR", error.message);
    } finally {
      setform({ title: "", video: "", thumnail: "", prompt: "" });

      setupload(false);
    }
  };

  const [upload, setupload] = useState(false);
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white font-psemibold">Upload Video</Text>
        <FormField
          title="Video title"
          value={form.title}
          placeholder="Give your video a catchy title ..."
          handleChangeText={(e) => setform({ ...form, title: e })}
          otherStyles="mt-10"
        />
        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Upload video
          </Text>
          <TouchableOpacity onPress={() => openPicker("video")}>
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
                className="w-full h-64 rounded-xl"
                resizeMode={ResizeMode.COVER}
              />
            ) : (
              <View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
                <View className="w-14 h-14 border border-secondary-100 justify-center items-center">
                  <Image
                    source={icons.upload}
                    resizeMode="conatin"
                    className="w-1/2 h-1/2 "
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Thumnail Image
          </Text>
          <TouchableOpacity onPress={() => openPicker("image")}>
            {form.thumnail ? (
              <Image
                source={{ uri: form.thumnail.uri }}
                resizeMode="cover"
                className="w-full h-64 rounded-2xl"
              />
            ) : (
              <View className="w-full h-60 px-4 bg-black-100 border-2 border-black-200 flex-row  space-x-2 rounded-2xl justify-center items-center">
                <Image
                  source={icons.upload}
                  resizeMode="conatin"
                  className="w-5 h-5 "
                />
                <Text className="text-sm text-gray-100 font-pmedium">
                  Chose a file
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <FormField
          title="AI prompt"
          value={form.prompt}
          placeholder="The prompt you used to create this video..."
          handleChangeText={(e) => setform({ ...form, prompt: e })}
          otherStyles="mt-7"
        />
        <CustomBtn
          title="Submit and Publish"
          handlepress={submit}
          containerStyles="mt-7"
          isLoading={upload}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
