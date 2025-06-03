import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-16 mb-5 mx-auto" />

        <SafeAreaView className="bg-primary flex-1 px-10">
          <View className="flex justify-center items-center flex-1 flex-col gap-5">
            <Image source={icons.person} className="size-10" tintColor="#fff" />
            <Text className="text-gray-500 text-base">Profile</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Profile;
