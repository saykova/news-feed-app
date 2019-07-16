import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { inject, observer } from 'mobx-react';

class NewsDetailsScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const articleKey = this.props.navigation.getParam('articleKey'),
            article = this.props.store.getNewsByKey(articleKey);

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

export default inject('store')(observer(NewsDetailsScreen));