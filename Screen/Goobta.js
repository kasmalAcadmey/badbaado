import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Pressable,
  StatusBar,
} from "react-native";
import { Entypo } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

export default function Goobta({ navigation }) {
  const router = useRoute().params;

  let newDate = new Date().toLocaleDateString();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable style={styles.backBtn} onPress={navigation.goBack}>
          <Icon name="arrow-back-ios" size={20} />
        </Pressable>
      </View>

      <View style={styles.productTitle}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoqSCTqYWz0ph2mYhow2UfYZIOr7nitkaCoddPE4Tsw&s",
            }}
          />
        </View>

        <Text style={styles.welcome}>Kuso dhawoow shirkada badbaado</Text>
      </View>

      <View style={styles.details}>
        <View style={styles.addCartBtnBox}>
          <View style={styles.locContainer}>
            <TouchableOpacity
              style={styles.locT}
              onPress={() => navigation.navigate("MagaaloT")}
            >
              <View style={styles.loc}>
                <Entypo name="location-pin" size={24} color="black" />
                <Text style={styles.txtloc}>Goobta laga Baxayo</Text>
              </View>
              <Text style={styles.txtlocmagaaladad}>
                {router?.baxyso ? router?.baxyso : "Hergaysa"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.locT}
              onPress={() => navigation.navigate("Mag")}
            >
              <View style={styles.loc}>
                <Entypo name="location-pin" size={24} color="black" />
                <Text style={styles.txtloc}>Goobta la tegayo</Text>
              </View>
              <Text style={styles.txtlocmagaaladad}>
                {" "}
                {router?.tagyso ? router?.tagyso : "Burco"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.locT}
              onPress={() => navigation.navigate("DatepIC")}
            >
              <View style={styles.loc}>
                <Fontisto name="date" size={24} color="black" />
                <Text style={styles.txtloc}>Dooro wakhtiga </Text>
              </View>
              <Text style={styles.txtlocmagaaladad}>
                {router?.date ? router?.date : newDate}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.addCartBtn}
              onPress={() => navigation.navigate("Buses")}
            >
              <Text style={styles.RaadiBus}>Raadi Bus</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    justifyContent: "centet",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  RaadiBus: {
    textAlign: "center",
    flex: 1,
    fontSize: 20,
    color: "white",
  },
  backBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
    marginRight: 385,
    marginTop: 5,
    padding: 0,
    height: 33,
    width: 60,
    backgroundColor: "white",
    borderRadius: 10,
  },
  productTitle: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    backgroundColor: "lightgrey",
    height: 150,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    gap: 20,
  },
  logo: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "400",
    color: "black",
    padding: 10,
  },
  details: {
    marginTop: 15,
    paddingHorizontal: 0,
    paddingTop: 10,
    paddingBottom: 6,
    backgroundColor: "lightgrey",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  loc: {
    flexDirection: "row",
    marginTop: 30,
  },
  txtloc: {
    fontSize: 19,
    fontWeight: "500",
    color: "black",
  },
  txtlocmagaaladad: {
    marginLeft: 10,
    fontWeight: "700",
    fontSize: 20,
    color: "green",
  },
  addCartBtn: {
    paddingVertical: 18,
    paddingHorizontal: 10,
    backgroundColor: "green",
    borderRadius: 5,
    marginTop: 25,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "red",
    color: "white",
    height: 60,
    width: 300,

    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "300",
    shadowColor: "red",
    marginLeft: 85,

    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 1,
  },
  locT: {
    borderRadius: 10,
    borderColor: "green",
    borderBottomWidth: 0.75,
    marginLeft: 20,
    marginRight: 20,
  },
  locContainer: {
    gap: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 40,
    width: 400,
    height: 271,
  },
});
