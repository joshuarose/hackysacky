import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Left, Button, Icon } from 'native-base';
import HTMLView from 'react-native-htmlview';

export default class Story extends Component {
  render(){
    const { comment } = this.props;
    return(
      <Card>
        <CardItem bordered={true}>
          <Body>
            <HTMLView value={comment.text}/>
          </Body>
        </CardItem>
      </Card>
    )
  }


}




