import React from "react";
import Input from "../components/Input";
import { FontAwesome, Feather } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";

const SignUpForm = () => {
  return (
    <>
      <Input label="First name" icon="user-o" iconPack={FontAwesome} />
      <Input label="Last name" icon="user-o" iconPack={FontAwesome} />
      <Input label="Email" icon="mail" iconPack={Feather} />
      <Input label="Password" icon="lock" iconPack={Feather} />
      <SubmitButton
        title="Sign up"
        onPress={() => console.log("Buttton pressed")}
        style={{ marginTop: 20 }}
      />
   
    </>
  );
};

export default SignUpForm;
