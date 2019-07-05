import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class NewsScreen extends Component {
    
    static navigationOptions = {
        headerTitle: 'News',
    };

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Category', { category: 'technology' })}>
                    <Text>Go to category Technology</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Category', { category: 'science' })}>
                    <Text>Go to category Science</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Category', { category: 'health' })}>
                    <Text>Go to category Health</Text>
                </TouchableOpacity>
            </View>
        )
    }
}