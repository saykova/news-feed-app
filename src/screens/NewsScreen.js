import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class NewsScreen extends Component {
    
    static navigationOptions = {
        headerTitle: 'News',
    };

    render() {
        return (
            <ScrollView>
                <TouchableOpacity
                    style={[styles.category, styles.technology]}
                    onPress={() => this.props.navigation.navigate('Category', { category: 'technology' })}>
                    <Text>Technology</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.category}
                    onPress={() => this.props.navigation.navigate('Category', { category: 'science' })}>
                    <Text>Science</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.category}
                    onPress={() => this.props.navigation.navigate('Category', { category: 'health' })}>
                    <Text>Health</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    category: {
        marginVertical: 10
    },
    technology: {
        // backgroundColor: 'blue'
    }
});