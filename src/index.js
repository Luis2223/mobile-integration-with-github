import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';
import './config/reactotron';

const App = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ffc38f" />
            <Routes />
        </>
    );
};

export default App;
