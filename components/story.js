import React, { Component } from 'react';
import { CardItem, Body, Text } from 'native-base';

export default class Story extends Component {
  render(){
    const { story } = this.props;
    return(
      <CardItem bordered={true} button={true} onPress={() => this.props.openStory(story)}>
        <Body>
          <Text>
            { story.title}
          </Text>
        </Body>
      </CardItem>
    )
  }
}




