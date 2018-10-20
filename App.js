/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
  StyleSheet
} from 'react-native';
import mainScreen from './components/mainScreen.js';
import detailScreen from './components/detailScreen.js';
import {createStackNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppStackNavigator/>
    );
  }  
}

const AppStackNavigator = createStackNavigator({
    Main: mainScreen,
    Detail: detailScreen
  },{
    initialRouteName: 'Main'
  }
)
