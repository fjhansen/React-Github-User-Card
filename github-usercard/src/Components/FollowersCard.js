import React, { Component } from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class FollowersCard extends Component{
  render() {
    return(
      this.props.followers.map(follower => {
        return(
     
      <Card body inverse style={{ backgroundColor: '#000000', border: '2px solid #9259DA', width: '250px', color: '#9259DA', display: 'flex', flexDirection:'row', textAlign:'center', alignItems:'center', margin: '.5% .5%' }} key={follower.id}>
        <CardImg style={{border:'1px solid transparent', borderRadius:'50%', width: '100px'}}src={follower.avatar_url}/>
          <CardBody bg='dark'>
    <CardTitle style={{textAlign:'center' , margin: '3% 6%'}}><p>{follower.login}</p></CardTitle>
            <CardSubtitle><p>{follower.location}</p></CardSubtitle>
    <CardText><p><a style={{textDecoration:'none', color: '#DA707F'}} href ={follower.repos_url}> Repos</a></p></CardText>
            {/*maybe button or link here?*/}
          </CardBody>
      </Card> 
         )
      } )
    )
  }
}

export default FollowersCard
