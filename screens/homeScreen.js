import React, { Component } from 'react';
import {observer} from 'mobx-react/native';
import { Linking } from 'react-native';
import { Container, Content, Card } from 'native-base';
import storyStore from '../stores/storyStore';
import Story from '../components/story';

@observer
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Hacky Sacky'
  };
  
  render() {
    const { stories } = this.props.screenProps.store;
    if (!stories){
      return(
        <Text>Loading Hacky Stories</Text>
      )
    } else {
      return (
        <Container>
          <Content>              
              { stories.map((story) => <Story key={story.id} story={story} openStory={this.openStory.bind(this)}/>)}
          </Content>
        </Container>
      )
    }
  }
  componentWillMount(){
    this.props.screenProps.store.getStories();
  }

  openStory(story){
    const { navigate } = this.props.navigation;
    if (story.url){
      Linking.canOpenURL(story.url).then(supported => {
        if (supported) {
          Linking.openURL(story.url);
        } else {
          console.log("Don't know how to open URL: " + story.url);
        }
      })
    } else {
      navigate('Story', { html: story.text });
    }
  }
}