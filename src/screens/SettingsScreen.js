import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings header',
    };

    render() {
        return (
            <View>
                <Text>Settings</Text>
            </View>
        )
    }
}
