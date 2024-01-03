import React from "react";
import { View, StyleSheet } from "react-native";

const PageContainer = props => {
  return <View style={styles.container}>{props.children}</View>;
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "white",
  },
});
export default PageContainer;
