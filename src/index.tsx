import React, { Fragment, useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { gql, useQuery } from "@apollo/client";

import { Card, Header } from "./components";
import { Story } from "./utils";

const FEED_QUERY = gql`
  query GetFeed {
    feed {
      by
      title
      text
      score
    }
  }
`;

const Main = () => {
  const [stories, setStories] = useState<Story[] | undefined>(undefined);

  const { loading } = useQuery(FEED_QUERY, {
    onCompleted: (result) => {
      if (result && result.feed) {
        setStories(result.feed);
      }
    },
    onError: (error) => console.log({ error }),
  });

  if (loading) return <ActivityIndicator />;

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Header imageSource={require("../assets/profpic.jpg")} />
        <ScrollView
          style={{
            marginTop: 16,
          }}
          contentContainerStyle={{
            paddingTop: 16,
            paddingBottom: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {stories &&
            stories.map((story, i) => (
              <View key={i} style={{ marginBottom: 32 }}>
                <Card
                  smallTitle={story?.by}
                  largeTitle={story?.title}
                  footnoteText=""
                  //source={}
                  onPress={() => {}}
                  //resizeMode="cover"
                />
              </View>
            ))}
          {/* <AppOfTheDayCard
          iconSource={require("./assets/Colorfy.jpg")}
          backgroundSource={require("./assets/ColorfyBG.jpg")}
          onPress={() => {}}
          buttonOnPress={() => {}}
        /> */}
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default Main;
