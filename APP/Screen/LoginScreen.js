import React, { useState, useEffect } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import TextField from "../Components/TextField";
import { FontAwesome } from "react-native-vector-icons";

import axios from "axios";

interface LoginScreenProp {
  route: RouteProp<RootStackParamList, "LoginScreen">;
  navigation: StackNavigationProp<RootStackParamList, "LoginScreen">;
}

function LoginScreen({ navigation }) {
  const [phone, set_phone] = useState("");
  const [phone_error, set_phone_error] = useState("");

  useEffect(() => {});

  const apipost = () => {
    axios
      .post("http://15.207.254.111:5000/phone_num", {
        num: phone,
      })
      .then(function (response) {
        navigation.navigate("WebViewScreen");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const submit1 = () => {
    if (phone == "") {
      set_phone_error("Enter Phone Number");
    }
    if (phone.length == 10) {
      apipost();
    } else {
      set_phone_error("Enter Phone Number");
    }
  };

  return (
    <View style={styles.main}>
      <StatusBar />
      <Text
        style={{
          fontSize: 35,
          textAlign: "center",
          fontWeight: "800",
          color: "black",
          marginTop: -60,
          marginBottom: 20,
        }}
      >
        User Login
      </Text>
      <View style={styles.txtinput}>
        <FontAwesome
          name="phone"
          color="black"
          size={30}
          style={{ top: 7, left: 10 }}
        />
        <TextField
          style={{
            borderBottomWidth: 1,
            borderColor: "grey",
            marginHorizontal: 20,
          }}
          placeholder="Enter Phone Number"
          error={phone_error == "" ? undefined : phone_error}
          maxLength={10}
          keyboardType="numeric"
          onBlur={() => {
            if (phone == "") {
              set_phone_error("Enter Phone Number");
            }
          }}
          onChangeText={(text) => {
            set_phone(text);
          }}
          onFocus={() => {
            set_phone_error("");
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          submit1();
        }}
      >
        <Text style={styles.subTxt}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
  },
  txtinput: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 15,
    width: "80%",
    padding: 5,
  },
  submit: {
    backgroundColor: "skyblue",
    marginTop: 60,
    padding: 15,
    borderRadius: 50,
  },
  subTxt: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
export default LoginScreen;
