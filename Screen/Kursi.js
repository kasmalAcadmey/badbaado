import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
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
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome5 } from "@expo/vector-icons";
// Sample KursiData array containing kursi information objects
const KursiData = [
  { id: 1, status: "occupied" },
  { id: 2, status: "available" },
  { id: 3, status: "available" },
  { id: 4, status: "available" },
  { id: 5, status: "available" },
  { id: 6, status: "available" },
  { id: 7, status: "occupied" },
  { id: 8, status: "available" },
  { id: 9, status: "available" },
  { id: 10, status: "available" },
  { id: 11, status: "available" },
  { id: 12, status: "available" },
  { id: 13, status: "occupied" },
  { id: 14, status: "available" },
  { id: 15, status: "available" },
];

export default function Kursi({ navigation }) {
  const [selectedKursi, setSelectedKursi] = useState(null);
  const router = useRoute().params;
  const { bus } = router;

  const handleKursiPress = (kursi) => {
    if (kursi.status === "available") {
      setSelectedKursi(kursi.id);
    } else {
      Alert.alert(
        "Message Aqri",
        "Korsingan mar hore ayaa la qatay mid kle dooro",
        [{ text: "OK" }, { text: "CANCEL" }]
      );
    }
  };
  console.log(selectedKursi);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.header}>
          <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        </View>
        <View style={styles.dooroCon}>
          <Text style={styles.dooro}>Dooro Kursi </Text>
        </View>
        <View>
          <View style={styles.cartCard}>
            {KursiData.map((kursi, index) => (
              <Pressable
                key={index}
                style={[
                  styles.kursi,
                  kursi.id === selectedKursi ? styles.selectedKursi : null,
                ]}
                onPress={() => handleKursiPress(kursi)}
              >
                {kursi && kursi.status === "available" ? (
                  <Image
                    source={require("../src/assets/kursi.png")}
                    style={styles.itemImg}
                  />
                ) : kursi.status === "occupied" && kursi.id === 1 ? (
                  <Image
                    source={require("../src/assets/shookaan.png")}
                    style={styles.itemImg}
                  />
                ) : (
                  <FontAwesome5 name="people-carry" size={44} color="red" />
                )}

                <Text style={styles.kurNum}>{kursi.id}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <TouchableOpacity
          onPress={() =>
            selectedKursi !== null &&
            navigation.navigate("Lacag", { bus: bus, sit: selectedKursi })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Bixi Lacagta</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scroll: {
    marginHorizontal: 10,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  dooroCon: {},
  dooro: {
    backgroundColor: "lightgrey",
    height: 50,
    color: "green",
    padding: 10,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    borderRadius: 20,
    textAlign: "center",
  },
  cartCard: {
    height: "auto",
    elevation: 50,
    borderRadius: 25,
    shadowOpacity: 9.35,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "lightgrey",
    marginVertical: 0,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  kursi: {
    width: 80,
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
  itemImg: {
    height: 50,
    width: 50,
    marginBottom: 5,
    objectFit: "contain",
  },
  kurNum: {
    fontWeight: "bold",
    fontSize: 18,
  },
  selectedKursi: {
    // borderColor: "green",
    // borderRadius: 10,
    // borderWidth: 1,
    // justifyContent: "center",
    // // width: 100,
    // // height: 100,
    // alignItems: "center",
    backgroundColor: "yellow",
  },
});
