import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

const PlacesList = ({ places }) => {
  console.log('PlacesList');
  if(!places || places.length === 0) {
    return <View style={styles.fallbackConainer}>
      <Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
    </View>
  }
  
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderitem={({ item }) => <PlaceItem place={item} />}
    />
  );
};

const styles = StyleSheet.create({
  fallbackConainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbackText: {
    fontSize: 16,
     color: Colors.primary200
  }
})
export default PlacesList;
