import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default class NewsDetailsScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let article = this.props.navigation.getParam('article');

        return (
            <ScrollView>
                <Text>News Details</Text>
                <Text>{article.title}</Text>
                <Image style={{width: 150, height: 150}} source={{uri: article.urlToImage}} />
                <Text>{article.author}</Text>
                <Text>{article.description}</Text>
                <Text>{article.publishAt}</Text>
                <Text>{article.content}</Text>
            </ScrollView>
        )
    }
}