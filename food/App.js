import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="ResultShow" component={ResultsShowScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}