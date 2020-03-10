import React, { Component } from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class UserCard extends Component{
  render() {
    return(
      <Card>
        <CardImg src={this.props.main.avatar_url}/>
          <CardBody>
    <CardTitle><p>{this.props.main.login}</p></CardTitle>
            <CardSubtitle><p>{this.props.main.location}</p></CardSubtitle>
    <CardText><p>Repos: <a href ={this.props.main.repos_url}> Repos</a></p></CardText>
            {/*maybe button or link here?*/}
          </CardBody>
      </Card>
    )
  }
}

export default UserCard

