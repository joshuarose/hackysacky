import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Left, Button, Icon } from 'native-base';

export default class Story extends Component {
  render(){
    const { story } = this.props;
    const hackerStyle = {
      color: '#ff6600'
    };
    return(
      <Card>
        <CardItem bordered={true} button={true} onPress={() => this.props.openStory(story)}>
          <Body>
            <Text>
              { story.title}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon name="logo-hackernews" style={ hackerStyle } />
              <Text style={ hackerStyle }>{ story.commentCount } comments</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    )
  }


}




