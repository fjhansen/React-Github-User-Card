import React, { Component } from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class UserCard extends Component{
  render() {
    return(
      <Card>
        <CardImg/>
          <CardBody>
            <CardTitle>Title</CardTitle>
            <CardSubtitle>SubText</CardSubtitle>
            <CardText>Text Text Text Text</CardText>
            {/*maybe button or link here?*/}
          </CardBody>
      </Card>
    )
  }
}

export default UserCard

