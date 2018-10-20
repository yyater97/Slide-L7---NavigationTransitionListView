import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class detailScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image style={styles.image} source={{uri:`http://image.tmdb.org/t/p/w185/${this.props.navigation.state.params.item.poster_path}`}}/>
                </View>
                <ScrollView style={styles.txtContainer}>
                    <Text style={styles.title}>{this.props.navigation.state.params.item.title}</Text>
                    <Text style={styles.text}>{this.props.navigation.state.params.item.overview}</Text>
                    <Text style={styles.text}>Popularity: {this.props.navigation.state.params.item.popularity}</Text>
                    <Text style={styles.text}>Release date: {this.props.navigation.state.params.item.release_date}</Text>
                </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#E8C805',
        flexDirection: 'column'
    },
    imgContainer: {
        flex: 1,
        alignItems: 'center',
        position: 'relative'
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    txtContainer: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    text: {
        fontSize: 15
    }
});