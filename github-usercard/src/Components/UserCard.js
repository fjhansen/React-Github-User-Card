import React, { Component } from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class UserCard extends Component{
  render() {
    return(
      <Card body inverse style={{ backgroundColor: '#000000', border: '2px solid #DA707F', width: '250px', color: '#DA707F', display: 'flex', flexDirection:'row', textAlign:'center', alignItems:'center' }}>
        <CardImg style={{border:'1px solid transparent', borderRadius:'50%', width: '100px'}} src={this.props.main.avatar_url}/>
          <CardBody>
    <CardTitle><p>{this.props.main.login}</p></CardTitle>
            <CardSubtitle><p>{this.props.main.location}</p></CardSubtitle>
    <CardText><p><a style={{color: '#9259DA', textDecoration: 'none'}} href ={this.props.main.repos_url}> Repos</a></p></CardText>
            {/*maybe button or link here?*/}
          </CardBody>
      </Card>
    )
  }
}

export default UserCard

