import React, { Component } from 'react';
import HTMLView from 'react-native-htmlview';

export default class StoryScreen extends Component {
    static navigationOptions = {
      title: 'Story',
    };

    render() {
      return(<HTMLView value={this.props.navigation.state.params.html}/>)
    }
    
  }