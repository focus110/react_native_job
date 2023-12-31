import { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { ScrollView } from "react-native";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("developer");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => {
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />;
          },
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Popularjobs searchTerm={searchTerm} />
          <Nearbyjobs searchTerm={searchTerm} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
