import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>OUR SERVICES</Text>
          <View style={styles.products}>
            <Pressable
              style={styles.itemCard}
              onPress={() => navigation.navigate("Goobta")}
              accessibilityLabel="Navigate to Bus Goobta"
            >
              <View style={styles.item}>
                <Image
                  source={require("../src/assets/busG.png")}
                  style={styles.itemImage}
                  accessibilityLabel="Bus Image"
                />
                <Text style={styles.itemName}>Bus</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.itemCard}
              onPress={() => navigation.navigate("Home")}
              accessibilityLabel="Navigate to Home"
            >
              <View style={styles.item}>
                <Image
                  source={require("../src/assets/delivery.png")}
                  style={styles.itemImage}
                  accessibilityLabel="Delivery Image"
                />
                <Text style={styles.itemName}>Alaab</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scroll: {
    marginHorizontal: 10,
  },
  banner: {
    marginTop: 32,
  },
  bannerText: {
    fontSize: 33,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 40,
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "green",
    color: "white",
  },
  products: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginHorizontal: 4,
    marginTop: 40,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
  },
  itemCard: {
    width: "48%",
    marginBottom: 10,
    marginTop: 10,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 10 },
  },
  item: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  itemImage: {
    height: 120,
    width: 120,
    borderRadius: 30,
  },
  itemName: {
    fontSize: 30,
    marginTop: 8,
    marginBottom: 3,
    fontWeight: "bold",
    color: "green",
  },
});
