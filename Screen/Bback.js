import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

const Bback = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSaveFeedback = () => {
    // Handle saving feedback here
    console.log("Name:", name);
    console.log("Feedback:", feedback);
    // You can implement saving logic here, like sending the feedback to a server
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Fal-celinta Macmiilka</Text>
      </View>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="magacaaga"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={[styles.input, { height: 150, textAlignVertical: "top" }]}
          placeholder="macmiil nala wadaag falcelintaada"
          multiline
          value={feedback}
          onChangeText={(text) => setFeedback(text)}
        />
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveFeedback}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  titleContainer: {
    width: "100%",
    backgroundColor: "#28a745",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  titleText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    marginBottom: 130,
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Bback;
