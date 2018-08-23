import React from "react";
import { WebView, View } from "react-native";
import WKWebView from "react-native-wkwebview-reborn";

export class WebViewHybrid extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <WKWebView
                        javaScriptEnabled={true}
                        source={{ uri: "https://www.niche.com" }}
                    />
                </View>
                <View style={{ height: 2, backgroundColor: "#f00" }} />
                <View style={{ flex: 1 }}>
                    <WebView
                        javaScriptEnabled={true}
                        source={{ uri: "https://www.niche.com" }}
                    />
                </View>
            </View>
        );
    }
}

export default WebViewHybrid;
