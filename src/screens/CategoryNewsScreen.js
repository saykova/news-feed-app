import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { inject, observer } from 'mobx-react';

class CategoryNewsScreen extends Component {
    static navigationOptions ({ navigation }) {
        return {
            headerTitle: 'Category ' + navigation.getParam('category'),
        }
    }

    constructor(props) {
        super(props);
        this.props.store.setCurrentCategory(this.props.navigation.getParam('category'));
    }

    keyExtractor = (item, key) => key.toString();

    renderItem = ({item}) =>{
        let src = (item.urlToImage) ? item.urlToImage : 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png';

        return (
            <ListItem
                title={item.title}
                leftAvatar={{ rounded: false, source: { uri: src } }}
                onPress={() => this.props.navigation.navigate('Details', {articleKey: item.key})}
            />
        ); 
    } 

    renderSeparator = () => {
        return (
            <View style={styles.separator} />
        );
    }

    render() {
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={this.props.store.getCategoryNews}
                renderItem={this.renderItem}
                refreshing={this.props.store.state.isRefreshing}
                onRefresh={this.props.store.refreshing}
                ItemSeparatorComponent={this.renderSeparator}
            />
        );
    }
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "15%"
    }
});

export default inject('store')(observer(CategoryNewsScreen));
