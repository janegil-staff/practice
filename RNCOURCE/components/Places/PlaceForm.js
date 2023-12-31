import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";


const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');

  function changeTitleHandler() {
    setEnteredTitle(enteredText);
  }
  return <ScrollView style={styles.form}>
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} onChangeText={changeTitleHandler} />
    </View>
    <ImagePicker />
    </ScrollView>
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24
  },
  label: {
    color: Colors.primary500,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical:8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100

  }
})
export default PlaceForm;
