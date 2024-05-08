import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
const Onboarding = ({ navigation }) => {
  const data = [
    {
      image: require("../assets/car.jpg"),
      name: "BADBAADO Transportion",
      description:
        "The word 'lorem', for example, isn't a real Latin word, it's a shortened version of the word 'dolorem shortened version of the word 'dolorem",
      id: 1,
    },
    {
      image: require("../assets/saving1.png"),
      name: "Keep or Save Your Money Texi",
      description:
        "Pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. The value is expressed i",
      id: 2,
    },
    {
      image: require("../assets/starman-concept-illustration_114360-5896.jpg"),
      name: "Fly with Badbaado Transportion",
      description:
        "Units. It is recommended to use it instead of y in cases when the original view can be transformed as an effect of the gesture.",
      id: 3,
    },
  ];
  const [currentIndex, setCurentIndex] = useState(0);
  const item = data[currentIndex];

  const handleChnage = () => {
    const lastStep = currentIndex === data.length - 1;
    if (lastStep) {
      navigation.navigate("main");
    } else {
      setCurentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={item.image} />
      <View style={styles.onboard}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.button}>
          <Pressable onPress={handleChnage} style={styles.press}>
            <Text style={styles.text}>Continue</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("main")}>
            <Text style={styles.skip}>Skip</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor: index === currentIndex ? "green" : "#c9c9c9",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingVertical: 40,
    padding: 18,
  },
  onboard: {
    marginTop: 80,
    marginBottom: 40,
  },
  icon: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    marginTop: 40,
    resizeMode: "contain",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 15,
  },

  press: {
    backgroundColor: "green",
    flex: 1,
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 17,
  },
  skip: {
    color: "royalblue",
    fontSize: 25,
  },
  description: {
    fontSize: 17,
    lineHeight: 25,
    marginVertical: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    letterSpacing: 1,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  indicator: {
    flex: 1,
    backgroundColor: "#c9c9c9c9",
    height: 6,
    borderRadius: 5,
  },
});
