import React, { Component } from 'react';
import {observer} from 'mobx-react/native';
import { View, StyleSheet, Button, Linking } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Title } from 'native-base';
import storyStore from '../stores/storyStore';

@observer
export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Hacky Sacky',
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
                <Card>
                  { stories.map((story) => 
                      <CardItem key={story.id} bordered={true} button={true} onPress={() => this.openStory(story)}>
                        <Body>
                          <Text>
                            { story.title}
                          </Text>
                        </Body>
                      </CardItem>
                  )}
  
                </Card>
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