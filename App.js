import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/homeScreen';
import StoryScreen from './screens/storyScreen';
import CommentScreen from './screens/commentScreen';
import storyStore from './stores/storyStore';

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Story: { screen: StoryScreen },
  Comment: { screen: CommentScreen }
});

export default class App extends React.Component {
  render() {
    return(
      <Navigator screenProps={{store: storyStore}} />
    ); 
  }
}
