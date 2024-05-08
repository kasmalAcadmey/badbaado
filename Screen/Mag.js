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
  TouchableOpacity,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const MagData = [
  {
    id: 1,
    name: "Hargeisa",
    region: "Maroodijeex",
    image: require("../src/assets/hargeisa.jpg"),
  },
  {
    id: 2,
    name: "Burco",
    region: "Togdheer",
    image: require("../src/assets/burco.jpeg"),
  },
  {
    id: 3,
    name: "Boorama",
    region: "Awdal",
    image: require("../src/assets/boorama.jpeg"),
  },
  {
    id: 4,
    name: "Berbera",
    region: "Saaxil",
    image: require("../src/assets/berbera.jpeg"),
  },
];

export default function Mag({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.Scroll}>
        <View style={styles.header}>
          <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        </View>

        <View style={styles.dooroCon}>
          <Text style={styles.dooro}>Dooro magaalada aad tagayso </Text>
        </View>
        {MagData.map((mag, index) => (
          <Pressable
            key={index}
            onPress={() => navigation.navigate("Goobta", { tagyso: mag.name })}
          >
            <View style={styles.cartCard}>
              <Image source={mag.image} style={styles.itemImg} />
              <View style={styles.txtstyl}>
                <Text style={styles.txt1}>{mag.name}</Text>
                <Text style={styles.txt2}>{mag.region}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  Scroll: {
    marginHorizontal: 10,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
  },
  cartCard: {
    height: 100,
    elevation: 50,
    borderRadius: 25,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 10 },
    backgroundColor: "#ECF0F1",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  itemImg: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  txtstyl: {
    flex: 1,
    marginLeft: 10,
  },
  txt1: {
    fontWeight: "bold",
    fontSize: 19,
  },
  txt2: {
    fontSize: 20,
    color: "grey",
  },
  dooroCon: {},
  dooro: {
    borderStartColor: "green",
    fontSize: 20,
    backgroundColor: "green",
    height: 50,
    color: "white",
    padding: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "300",
  },
});
