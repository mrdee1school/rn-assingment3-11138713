import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { images } from "@/constants";

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F0E8",
  },
});
