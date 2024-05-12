import React from "react";
import { Pressable, StyleSheet, TouchableOpacity, View, useColorScheme } from "react-native";
import { Text } from "./Themed";
import { Link, router } from "expo-router";

type Props = {
  title: string;
  price: string;
  distance: number;
  location: string;
};


const BasicQuestCard: React.FC<Props> = ({ title, price, distance, location }) => {
  const theme = useColorScheme() ?? "light";
  const backgroundColor = theme == "light" ? "rgba(0, 0, 0, 0.08)": "rgba(255, 255, 255, 0.1)";

  return (
      <Link asChild href="home/gigs/1">
        <TouchableOpacity>
        <View style={[styles.card, { backgroundColor }]}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <Text>{distance} miles away</Text>
          <Text>{location}</Text>
        </View>
        <Text>{price}</Text>
        </View>
        </TouchableOpacity>
      </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 20,
  },
});

export default BasicQuestCard;
