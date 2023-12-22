import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
     <Text style={styles.text}>HomeScreen</Text>
     <Button title="Go to Componensts demo" onPress={() => navigation.navigate('Components') } />
     <Button title="Go to List demo" onPress={() => navigation.navigate('List') } />
     <Button title="Image demo" onPress={() => navigation.navigate('Image') } />
     <Button title="Counter demo" onPress={() => navigation.navigate('Counter') } />
     <Button title="Color picker demo" onPress={() => navigation.navigate('Colors') } />
     <Button title="Square demo" onPress={() => navigation.navigate('Square') } />
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
