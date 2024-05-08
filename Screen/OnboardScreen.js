import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function OnboardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <MaterialCommunityIcons
          name="bus"
          size={300}
          color="green"
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            BADBAADO {"\n"}{" "}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>Transportation</Text>
            </View>
          </Text>
          <Text style={styles.text}>Kusoo dhawoow shirkada BadBAADO</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("main")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#281b52",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "400",
    color: "#9992a7",
    textAlign: "center",
  },
  /** Hero */
  hero: {
    backgroundColor: "lightgrey",
    margin: 12,
    borderRadius: 16,
    padding: 16,
  },
  heroImage: {
    width: "100%",
    height: 400,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 14,
  },
  appName: {
    backgroundColor: "#fff2dd",
    transform: [
      {
        rotate: "0deg",
      },
    ],
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#281b52",
  },
  /** Button */
  button: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
    marginTop: 120,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});
