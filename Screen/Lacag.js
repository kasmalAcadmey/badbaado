import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { db } from "../config/firebase";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { collection, addDoc } from "firebase/firestore";

function Lacag({ navigation }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const router = useRoute().params;
  const { bus, sit } = router;
  const [loading, setloading] = useState(false);
  const handleNameChange = (text) => {
    setName(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };

  const handleFirebase = async () => {
    const data = {
      name,
      payment: paymentMethod,
      number: phoneNumber,
      properties: [
        {
          price: bus?.price,
          route: bus.route,
          time: bus.time,
          title: bus.title,
        },
      ],
      sit,
    };

    try {
      setloading(true);
      await addDoc(collection(db, "places"), {
        ...data,
      });
      setloading(false);
      navigation.navigate("sucess");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.header}>
          <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        </View>
        <View style={styles.cartCard}>
          <View style={styles.txtStyle}>
            <Text style={styles.txt1}> Faahfaahinta safarka </Text>
            <Text style={styles.txt2}> {bus?.route} </Text>
            <Text style={styles.txt3}> {bus?.time} </Text>
            <Text style={styles.txt3}> kursi: {sit} </Text>
          </View>
        </View>
        <View style={styles.txtStyl}>
          <Text style={styles.txt1}> Fadlan Dooro card </Text>
        </View>
        <View style={styles.cartCard2}>
          <Pressable
            style={styles.lacag}
            onPress={() => handlePaymentMethodSelect("ZAAD")}
          >
            <Text style={styles.zaad}> ZAAD </Text>
          </Pressable>
          <Pressable
            style={styles.lacag}
            onPress={() => handlePaymentMethodSelect("Edahab")}
          >
            <Text style={styles.zaad}> Edahab </Text>
          </Pressable>
        </View>
        <View style={styles.profileCard}>
          <View style={styles.txtForm}>
            <Text style={styles.text}> Fadlan Geli Magacaaga: </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTxt}
                placeholder="Magacaaga"
                value={name}
                onChangeText={handleNameChange}
              />
            </View>
            <Text style={styles.text}> Fadlan Geli Numberkaaga: </Text>
            <View style={styles.inputContainer}>
              {paymentMethod === "ZAAD" || paymentMethod === "Edahab" ? (
                <TextInput
                  style={styles.inputTxt}
                  keyboardType="numeric"
                  placeholder={paymentMethod === "ZAAD" ? "063-" : "065-"}
                  value={
                    phoneNumber.startsWith(
                      paymentMethod === "ZAAD" ? "063-" : "065-"
                    )
                      ? phoneNumber
                      : `${
                          paymentMethod === "ZAAD" ? "063-" : "065-"
                        }${phoneNumber}`
                  }
                  onChangeText={(text) => {
                    if (
                      text.startsWith(
                        paymentMethod === "ZAAD" ? "063-" : "065-"
                      )
                    ) {
                      setPhoneNumber(text);
                    } else if (/^\d{0,11}$/.test(text)) {
                      setPhoneNumber(
                        `${paymentMethod === "ZAAD" ? "063-" : "065-"}${text}`
                      );
                    }
                  }}
                />
              ) : (
                <TextInput
                  style={styles.inputTxt}
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChangeText={handlePhoneNumberChange}
                />
              )}
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleFirebase}
          style={{ marginHorizontal: 30 }}
        >
          <View style={styles.btnContainer}>
            {loading ? (
              <ActivityIndicator color={"white"} />
            ) : (
              <Text style={styles.title}> Bixi Lacagta </Text>
            )}
          </View>
        </TouchableOpacity>
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
  scroll: {
    marginHorizontal: 10,
  },

  cartCard: {
    height: 140,
    elevation: 5,
    borderRadius: 25,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "#ECF0F1",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  lacag: {
    backgroundColor: "green",
    borderRadius: 10,
    borderBlockColor: "grey",
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
  },
  zaad: {
    height: 45,
    width: 70,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 20,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  txtStyle: {
    flex: 1,
    marginLeft: 10,
  },
  txt1: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 3,
    fontWeight: "bold",
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
    textAlign: "center",
  },
  txt2: {
    fontSize: 20,
    marginBottom: 3,
    borderBottomColor: "black",
    borderBottomWidth: 0.1,
  },
  txt3: {
    fontSize: 20,
  },
  actionStyle: {
    marginLeft: 10,
    marginRight: 30,
  },
  actionText: {
    fontSize: 22,
    marginTop: 80,
    marginLeft: 50,
  },
  cartCard2: {
    height: 100,
    elevation: 5,
    borderRadius: 25,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  txtStyl: {
    flex: 1,
  },
  profileCard: {
    height: 200,
    elevation: 5,
    borderRadius: 25,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "#ECF0F1",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  txtForm: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputTxt: {
    flex: 1,
  },
  btnContainer: {
    height: 50,
    backgroundColor: "green",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
});

export default Lacag;
