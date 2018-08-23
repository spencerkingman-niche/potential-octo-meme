import React from 'react';
import { WebView } from 'react-native';

export class WebViewOld extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <WebView
                javaScriptEnabled={true}
                source={{ uri: 'https://www.niche.com' }}
            />
        )

    }
}

export default WebViewOld;