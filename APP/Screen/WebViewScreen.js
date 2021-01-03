import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  RefreshControl,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

interface WebViewScreenProp {
  route: RouteProp<RootStackParamList, "WebViewScreen">;
  navigation: StackNavigationProp<RootStackParamList, "WebViewScreen">;
}

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function WebViewScreen(props) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [link, set_link] = useState("http://15.207.254.111:5000/");
  // const [link, set_link] = useState("http://google.com/");

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(200000).then(() => setRefreshing(false));
  }, [refreshing]);

  const webViewRef = React.useRef(null);
  return (
    <View style={styles.main}>
      <StatusBar />
      <View style={{ borderWidth: 2, width: "100%", height: "100%" }}>
        <ScrollView
          style={styles.ScrollStyle}
          contentContainerStyle={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                console.log(webViewRef);
                webViewRef.current.reload();
                // link = "www.facebook.com";
                // set_link("http://google.com/");

                // set_link("http://15.207.254.111:5000/");
              }} // exl in function : this.yourWebview.reload();
            />
          }
        >
          <WebView
            stylestyle={styles.container}
            ref={webViewRef}
            mediaPlaybackRequiresUserAction={false}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowsInlineMediaPlayback={true}
            source={{ uri: link }}
          />
        </ScrollView>
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
  container: {
    position: "relative",
  },
  ScrollStyle: {
    backgroundColor: "white",
    position: "relative",
  },
});
export default WebViewScreen;
