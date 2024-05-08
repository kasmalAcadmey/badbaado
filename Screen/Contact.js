import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Feather } from "@expo/vector-icons";
export default function Contact() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.alert}>
          <View
            style={[
              styles.alertIcon,
              { backgroundColor: "#14b073", borderColor: "#14b073" },
            ]}
          ></View>

          <View style={styles.alertBody}>
            <Text style={styles.alertTitle}>Fadlan Hada Wac</Text>

            <Text style={styles.alertMessage}>
              macmiil wac call center ka gobol walba
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          ></TouchableOpacity>
        </View>
        <View style={styles.alert}>
          <View
            style={[
              styles.alertIcon,
              { backgroundColor: "#fa5855", borderColor: "#fa5855" },
            ]}
          >
            <Feather name="phone-call" size={24} color="Green" />
          </View>

          <View style={styles.alertBody}>
            <Text style={styles.alertTitle}>Hargeisa</Text>

            <Text style={styles.alertMessage}>line :52230 phone:4330076</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          ></TouchableOpacity>
        </View>
        <View style={styles.alert}>
          <View
            style={[
              styles.alertIcon,
              { backgroundColor: "#7b829b", borderColor: "#7b829b" },
            ]}
          >
            <Feather name="phone-call" size={24} color="Green" />
          </View>

          <View style={styles.alertBody}>
            <Text style={styles.alertTitle}>Burco</Text>

            <Text style={styles.alertMessage}>
              line:53330 Telesom : 063-445589 somtel : 065-9926737
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          ></TouchableOpacity>
        </View>
        <View style={styles.alert}>
          <View
            style={[
              styles.alertIcon,
              { backgroundColor: "#314de7", borderColor: "#314de7" },
            ]}
          >
            <Feather name="phone-call" size={24} color="Green" />
          </View>

          <View style={styles.alertBody}>
            <Text style={styles.alertTitle}>Boorama</Text>

            <Text style={styles.alertMessage}>
              line: 5333222 Telesom :063-4474844 somtel: 065-9926737
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.alertClose}></View>
          </TouchableOpacity>
        </View>
        <View style={styles.alert}>
          <View
            style={[
              styles.alertIcon,
              { backgroundColor: "green", borderColor: "#314de7" },
            ]}
          >
            <Feather name="phone-call" size={24} color="Green" />
          </View>

          <View style={styles.alertBody}>
            <Text style={styles.alertTitle}>Berbera</Text>

            <Text style={styles.alertMessage}>
              line: 5333222 Telesom :063-4474844 somtel: 065-9926737
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.alertClose}></View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  /** Alert */
  alert: {
    position: "relative",
    flexDirection: "row",
    marginBottom: 34,
  },
  alertIcon: {
    padding: 16,
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  alertBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderLeftWidth: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  alertTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: "#1e1e1e",
    marginBottom: 4,
  },
  alertMessage: {
    fontSize: 19,
    fontWeight: "500",
    color: "green",
  },
  alertClose: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
