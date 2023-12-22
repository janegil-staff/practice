import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Text>My name is: {password} </Text>
      {password.length < 4 ? <Text>Password must have at least 4 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
export default TextScreen;
