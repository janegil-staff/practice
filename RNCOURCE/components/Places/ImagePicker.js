import React from "react";
import { Alert, Button, Text, View } from "react-native";
import { launchCameraAsync, useCameraPermissions } from "expo-image-picker";
const ImagePicker = () => {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  
  async function verifyPermission() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }
    
    if (cameraPermissionInformation.status = PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissieon",
        "You nned to grant camra permissions to use this app"
      );
      
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission();
    if (hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  }
  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;
