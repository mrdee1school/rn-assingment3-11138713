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

      {/* Categories */}
      <Categories />
      {/* Categories */}

      {/* Ongoing Tasks */}
      <OngoingTasks />
      {/* Ongoing Tasks */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F0E8",
  },
});

const Categories = () => {
  const categories = [
    {
      task: "Eating",
      key: 1,
      numberOfTasks: "2 Tasks",
      image: images.eating,
    },
    { task: "Study", key: 2, numberOfTasks: "10 Tasks", image: images.study },
    { task: "Gym", key: 3, numberOfTasks: "2 Tasks", image: images.gym },
    { task: "Cook", key: 4, numberOfTasks: "1 Tasks", image: images.cook },
    { task: "Sleep", key: 5, numberOfTasks: "3 Tasks", image: images.sleep },
    { task: "Walk", key: 6, numberOfTasks: "6 Tasks", image: images.walk },
    {
      task: "Video games",
      key: 7,
      numberOfTasks: "8 Tasks",
      image: images.games,
    },
    { task: "Movies", key: 8, numberOfTasks: "2 Tasks", image: images.movie },
  ];
  return (
    <View>
      <Text className="text-xl font-semibold pt-8 px-6">Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View className="">
            <View className="bg-white py-3 px-3 mt-3 mb-4 h-48 mx-3 rounded-xl w-48">
              <Text className="font-semibold">{item.task}</Text>
              <Text className="text-xs">{item.numberOfTasks}</Text>
              <View className="pb-2 ml-4">
                <Image
                  source={item.image}
                  className="w-36 h-36"
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        )}
        horizontal
      />
    </View>
  );
};

const OngoingTasks = () => {
  const ongoing = [
    { task: "Watering the plants", key: 1 },
    { task: "Completing an assignment", key: 2 },
    { task: "Reading a book", key: 3 },
    { task: "Writing a paper", key: 4 },
    { task: "Feeding the cat", key: 5 },
    { task: "Riding a bike", key: 6 },
    { task: "Jogging", key: 7 },
    { task: "Cleaning the room", key: 8 },
    { task: "Cooking", key: 9 },
    { task: "Mowing the lawn", key: 10 },
    { task: "Washing the car", key: 11 },
    { task: "Washing clothes", key: 12 },
    { task: "Sleeping", key: 13 },
    { task: "Giving a speech", key: 14 },
    { task: "Going to lectures", key: 15 },
  ];
  return (
    <View>
      <Text className="text-xl font-semibold pt-8 pb-2 px-6">
        Ongoing Tasks
      </Text>
      <FlatList
        data={ongoing}
        renderItem={({ item }) => (
          <View>
            <View className="bg-white border border-[#E8D1BA] justify-center py-3 px-3 h-[110px] ml-6 mt-2 rounded-xl w-[360px]">
              <Text className="font-semibold">{item.task}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
