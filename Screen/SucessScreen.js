import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect } from "react";

const SucessScreen = ({ navigation }) => {
  const handleSuccess = () => {
    navigation.navigate("main");
  };

  useEffect(() => {
    let interval = setTimeout(() => {
      navigation.navigate("main");
    }, 2000);
    return () => clearTimeout(interval);
  }, []);
  return (
    <View style={styles.succussContainer}>
      <View style={styles.succuss}>
        <Text style={{ fontSize: 66, color: "white" }}>&#10003;</Text>
      </View>
      <View styl={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 33,
            marginBottom: 5,
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Orders Successfully
        </Text>
        <Text style={{ textAlign: "center" }}>
          You can find your orders screns detials
        </Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 22, marginBottom: 10 }}>Orders Detials</Text>
        <Pressable onPress={handleSuccess} style={styles.continue}>
          <Text style={styles.contText}>Successfully</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  succussContainer: {
    // marginTop: 100,
    justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 20,
    flex: 1,
  },
  order: {
    backgroundColor: "white",
    padding: 10,
    shadowColor: "white",
    shadowOpacity: 0.6,
    shadowOffset: { width: 1, height: 1 },
    elevation: 1,
    width: "100%",
    flexDirection: "row",
    gap: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: "cover",
  },
  continue: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  contText: {
    color: "white",
    fontSize: 17,
  },
  succuss: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
export default SucessScreen;
