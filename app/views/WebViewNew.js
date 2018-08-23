import React from "react";
import WKWebView from "react-native-wkwebview-reborn";

export class WebViewNew extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <WKWebView
                javaScriptEnabled={true}
                source={{ uri: "https://www.niche.com" }}
            />
        );
    }
}

export default WebViewNew;
