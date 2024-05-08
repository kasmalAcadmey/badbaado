import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/MaterialIcons";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const DatepIC = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const navigation = useNavigation();
  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleSetToday = () => {
    setSelectedDate(moment().format("YYYY-MM-DD"));
  };

  const handleSetTomorrow = () => {
    const tomorrow = moment().add(1, "day").format("YYYY-MM-DD");
    setSelectedDate(tomorrow);
  };

  useEffect(() => {
    if (selectedDate.length > 0) {
      navigation.navigate("Goobta", { date: selectedDate });
    }
  }, [selectedDate]);
  return (
    <View style={styles.container}>
      <View>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={20} />
        </Pressable>
      </View>
      <Text style={styles.title}>Dooro Date ka aad baxayso :</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: "green" },
          }}
        />
      </View>
      <Text style={styles.title}>Dooro maalinta aad baxayso:</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSetToday}>
          <Text style={styles.buttonText}>Maanta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSetTomorrow}>
          <Text style={styles.buttonText}>Beri</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  calendarContainer: {
    marginBottom: 16,
  },
  backBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 5,
    padding: 0,
    height: 33,
    width: 50,
    backgroundColor: "white",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "green",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DatepIC;
