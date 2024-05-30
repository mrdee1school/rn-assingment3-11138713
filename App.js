import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { images, icons } from "@/constants";

export default function App() {
  return (
    <SafeAreaView style={styles.container} className="h-full">
      <View className="flex-row space-x-24">
        <View className="p-6">
          <Text className="text-4xl font-semibold">Hello , Devs</Text>
          <Text className="font-light">14 tasks today</Text>
        </View>

        <View className="p-8 mr-6">
          <Image source={images.profile} className="w-12 h-12 rounded-full" />
        </View>
      </View>

      {/* Search area */}
      <View className="flex-row space-x-8">
        {/* Search box */}
        <View className="bg-white px-6 py-3 text-base w-80 ml-6 rounded-2xl flex-row items-center">
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
            tintColor="#161622"
          />
          <TextInput
            className="text-base ml-2 pb-1"
            placeholder="Search"
            placeholderTextColor="#161622"
          />
        </View>
        {/* Search box */}

        {/* Filter */}
        <View className="pt-1 mr-20">
          <Image
            source={icons.filter}
            className="w-9 h-9 rounded-lg p-3"
            resizeMode="contain"
          />
        </View>
        {/* Filter */}
      </View>
      {/* Search area */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F0E8",
  },
});
