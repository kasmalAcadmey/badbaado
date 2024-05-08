import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardScreen from "./Screen/OnboardScreen";
import Buses from "./Screen/Buses";
import Kursi from "./Screen/Kursi";
import Goobta from "./Screen/Goobta";
import Lacag from "./Screen/Lacag";
import Bback from "./Screen/Bback";
import Mag from "./Screen/Mag";
import MagaaloT from "./Screen/MagaaloT";
import DatepIC from "./Screen/DatepIC";
import Bottomnav from "./Bottomnav";
import Onboarding from "./Screen/Onboarding";
import SucessScreen from "./Screen/SucessScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardScreen" component={Onboarding} />
        {/* <Stack.Screen name="OnboardScreen" component={OnBoardScreen} /> */}
        <Stack.Screen name="main" component={Bottomnav} />
        <Stack.Screen name="Buses" component={Buses} />
        <Stack.Screen name="Kursi" component={Kursi} />
        <Stack.Screen name="Goobta" component={Goobta} />
        <Stack.Screen name="sucess" component={SucessScreen} />
        <Stack.Screen name="Lacag" component={Lacag} />
        <Stack.Screen name="Bback" component={Bback} />

        <Stack.Screen name="Mag" component={Mag} />
        <Stack.Screen name="MagaaloT" component={MagaaloT} />
        <Stack.Screen name="DatepIC" component={DatepIC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
