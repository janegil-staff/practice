import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {backgroundColor: Colors.primary500},
      headerTintColor: Colors.gray700,
      contentStyle: { backgroundColor: Colors.gray700}
    }}>
      <Stack.Screen
        name="AllPlaces"
        component={AllPlaces}
        title="Your favorite places"
        options={({ navigation }) => ({
          headerRight: ({ tintcolor }) => (
            <IconButton
              icon="add"
              size={24}
              color={tintcolor}
              onPress={() => navigation.navigate("AddPlace")}
            />
          ),
        })}
      />
      <Stack.Screen
        name="AddPlace"
        component={AddPlace}
        options={{ title: "Add a new place" }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
