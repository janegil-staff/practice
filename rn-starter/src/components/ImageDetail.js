import React from "react";
import { Image, Text, View } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image score - {props.score}</Text>
    </View>
  );
};

export default ImageDetail;
