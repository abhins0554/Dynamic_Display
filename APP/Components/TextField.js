import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface TextFieldProps extends TextInputProps {
  error?: string;
  label?: string;
}

function TextField({ error, label, ...props }) {
  return (
    <View style={styles.row}>
      <View style={[styles.txtInpt, !!error && { borderColor: "red" }]}>
        <TextInput {...props} style={{ textAlignVertical: "bottom" }} />
      </View>

      {error && (
        <Text
          key={error}
          style={{
            fontSize: 10,
            marginLeft: 60,
            color: "red",
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  txtInpt: {
    height: 40,
    top: 2,
    left: 60,
    textAlign: "center",
    width: "80%",
  },
  row: {
    flex: 1,
  },
});
export default TextField;
