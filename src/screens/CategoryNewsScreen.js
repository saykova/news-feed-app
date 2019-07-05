import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CategoryNewsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    fetchNews = (category) => {
        const urlString = 'https://newsapi.org/v2/top-headlines?category=' + category + '&apiKey=a938696adaf041b296f2f27e24f5ac01';

        const news = fetch(urlString)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.articles);
                
            });

        console.log(urlString,news.totalResults);

        this.setState({ news: news });
    }

    componentDidMount = () => {
        this.fetchNews(this.props.navigation.getParam('category'));
    };

    render() {
        return (
            <View>
                <Text>Category screen</Text>
                <TouchableOpacity
                    onPress={(article) => this.props.navigation.navigate('Details', {article})}>
                    <Text>News title</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
