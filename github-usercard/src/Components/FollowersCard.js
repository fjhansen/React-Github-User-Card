import React, { Component } from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class FollowersCard extends Component{
  render() {
    return(
      this.props.followers.map(follower => {
        return(
     
      <Card key={follower.id}>
        <CardImg src={follower.avatar_url}/>
          <CardBody>
    <CardTitle><p>{follower.login}</p></CardTitle>
            <CardSubtitle><p>{follower.location}</p></CardSubtitle>
    <CardText><p>Repos: <a href ={follower.repos_url}> Repos</a></p></CardText>
            {/*maybe button or link here?*/}
          </CardBody>
      </Card> 
         )
      } )
    )
  }
}

export default FollowersCard
