import React, { Component } from 'react';
import {observer} from 'mobx-react/native';
import { Linking } from 'react-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import storyStore from '../stores/storyStore';
import Story from '../components/story';
import Comment from '../components/comment';
import HTMLView from 'react-native-htmlview';

@observer
export default class CommentScreen extends Component {
  static navigationOptions = {
    title: 'Hacky Sacky'
  };
  
  render() {
    const { comments } = this.props.screenProps.store;
    if (!comments){
      return(
        <Text>Loading Hacky Comments</Text>
      )
    } else {
      return (
        <Container>
          <Content>
            {this.props.navigation.state.params.story.text &&
              <Card>
                <CardItem bordered={true}>
                  <Body>
                    <HTMLView value={this.props.navigation.state.params.story.text}/>
                  </Body>
                </CardItem>
              </Card>
            }              
            { comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
          </Content>
        </Container>
      )
    }
  }
  componentWillMount(){
    this.props.screenProps.store.getComments(this.props.navigation.state.params.story);
  }
}