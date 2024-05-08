import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Buses({ navigation }) {
  const busesData = [
    {
      title: "BadBaado transport",
      route: "Hargeisa - Burco",
      time: "07:00 AM",
      price: "shilin 9000.00",
    },
    {
      title: "BadBaado transport",
      route: "Burco - Hargeisa",
      time: "07:00 AM",
      price: "shilin 5000.00",
    },
    {
      title: "BadBaado transport",
      route: "Hargeisa - Burco",
      time: "07:00 AM",
      price: "shilin 25000.00",
    },
    {
      title: "BadBaado transport",
      route: "Hargeisa - Burco",
      time: "07:00 AM",
      price: "shilin 55000.00",
    },
    {
      title: "BadBaado transport",
      route: "Burco - Hargeisa",
      time: "07:00 AM",
      price: "shilin 5000.00",
    },
    {
      title: "BadBaado transport",
      route: "Hargeisa - Blacad",
      time: "07:00 AM",
      price: "shilin 7000.00",
    },
    {
      title: "BadBaado transport",
      route: "Balcad - Hargeisa",
      time: "07:00 AM",
      price: "shilin 55000.00",
    },
    {
      title: "BadBaado transport",
      route: "Baraawe - Mogadisho",
      time: "07:00 AM",
      price: "shilin 55000.00",
    },
    {
      title: "BadBaado transport",
      route: "Baraawe - Hudur",
      time: "07:00 AM",
      price: "shilin 255000.00",
    },
    {
      title: "BadBaado transport",
      route: "Jowhar - Burco",
      time: "07:00 AM",
      price: "shilin 155000.00",
    },
    {
      title: "BadBaado transport",
      route: "Hargeisa - Burco",
      time: "07:00 AM",
      price: "shilin 55000.00",
    },
    {
      title: "BadBaado transport",
      route: "Hargeisa - Burco",
      time: "07:00 AM",
      price: "shilin 55000.00",
    },
    {
      title: "BadBaado transport",
      route: "Burco - Hargeisa",
      time: "07:00 AM",
      price: "shilin 55000.00",
    },
    {
      title: "BadBaado transport",
      route: "Hargeisa - Burco",
      time: "07:00 AM",
      price: "shilin 55000.00",
    },
    {
      title: "BadBaado transport",
      route: "Burco - Hargeisa",
      time: "07:00 AM",
      price: "shilin 55000.00",
    },
    {
      title: "BadBaado transport",
      route: "Burco - Hargeisa",
      time: "07:00 AM",
      price: "shilin 35000.00",
    },
    {
      title: "BadBaado transport",
      route: "Hargeisa - Burco",
      time: "07:00 AM",
      price: "shilin 45000.00",
    },
    {
      title: "BadBaado transport",
      route: "Burco - Hargeisa",
      time: "07:00 AM",
      price: "shilin 1000.00",
    },
    {
      title: "BadBaado transport",
      route: "Hargeisa - Burco",
      time: "07:00 AM",
      price: "shilin 55000.00",
    },
    {
      title: "BadBaado transport",
      route: "Burco - Hargeisa",
      time: "07:00 AM",
      price: "shilin 8000.00",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {busesData.map((bus, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("Kursi", { bus })}
          >
            <View style={styles.cartCard}>
              <View style={styles.txtStyle}>
                <Text style={styles.txt1}>{bus.title}</Text>
                <Text style={styles.txt2}>{bus.route}</Text>
                <Text style={styles.txt3}>{bus.time}</Text>
              </View>
              {bus.price && (
                <View style={styles.actionStyle}>
                  <Text style={styles.actionText}>{bus.price}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
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
  scroll: {
    marginHorizontal: 10,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
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
  },
  txtStyle: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 20,
  },
  txt1: {
    fontWeight: "bold",
    fontSize: 16,
  },
  txt2: {
    fontSize: 13,
    color: "grey",
  },
  txt3: {
    fontWeight: "bold",
    fontSize: 17,
  },
  actionStyle: {
    marginRight: 20,
    alignItems: "center",
  },
  actionText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
