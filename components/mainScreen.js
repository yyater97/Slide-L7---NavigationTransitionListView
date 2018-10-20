import React, {Component} from 'react';
import {StyleSheet, View, FlatList, TextInput} from 'react-native';
import FlatListItem from './FlatListItem.js';
import API from '../api.js';

export default class mainScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            flatListData: null
        }

        API('').then((data)=>{
            this.setState({flatListData: data.flatData});
        });
    }

    static navigationOptions = {
        header: null
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput placeholder={'Search Bar'} onChangeText={(text)=>{
                        API(text).then((data)=>{
                            this.setState({flatListData: data.flatData});
                        });
                    }
                    }/>
                </View>
                <FlatList
                    data = {this.state.flatListData}
                    renderItem = {({item, index})=>{
                        return(
                            <FlatListItem
                                title={item.title} 
                                poster={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                                overview={item.overview}
                                gotoDetailScreen={
                                    ()=>{
                                        this.props.navigation.navigate('Detail', {item: item});
                                    }
                                }
                            />
                        );
                    }}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    searchContainer: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    },
    button: {
        width: 150,
        height: 50,
        borderColor: 'black',
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 25
    }
});