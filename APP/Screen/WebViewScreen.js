import React, { useState } from "react";
import { View, StyleSheet, Text, StatusBar, FlatList } from "react-native";
import { WebView } from "react-native-webview";

interface WebViewScreenProp {
  route: RouteProp<RootStackParamList, "WebViewScreen">;
  navigation: StackNavigationProp<RootStackParamList, "WebViewScreen">;
}

let link = "https://google.com";

function WebViewScreen(props) {
  return (
    <View style={styles.main}>
      <StatusBar />
      <View style={{ borderWidth: 2, width: "100%", height: "100%" }}>
        <WebView source={{ uri: link }} />
      </View>
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
});
export default WebViewScreen;
