import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/homeScreen';
import StoryScreen from './screens/storyScreen';
import storyStore from './stores/storyStore';

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Story: { screen: StoryScreen }
});

export default class App extends React.Component {
  render() {
    return(
      <Navigator screenProps={{store: storyStore}} />
    ); 
  }
}
