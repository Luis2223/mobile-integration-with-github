import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Repo extends Component {
    render() {
        const { navigation } = this.props;
        const link = navigation.getParam('link');
        return <WebView source={{ uri: link }} style={{ marginTop: 20 }} />;
    }
}
