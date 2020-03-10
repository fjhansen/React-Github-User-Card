import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './Components/UserCard';
import FollowersCard from './Components/FollowersCard'

class App extends Component {
  constructor() {
  super()
  this.state= {
    main: [],
    followers: [],
    }
  }
  componentDidMount() {
    axios
    .get('https://api.github.com/users/fjhansen')
    .then(res => {
      //console.log(res.data)
      this.setState({
        main: res.data
      })
      return res.data.followers_url
    })
    .then(res => {
      console.log(res)
      axios.get(res)
      
      .then(res => {
        console.log('DATA', res.data)
        this.setState({
          followers: res.data
        })
      })
    })
    
  }

  render(){
    return(
      <div>
        <h1>User Cards</h1>
        <UserCard main={this.state.main}/>
        <FollowersCard followers={this.state.followers}/>
        
      
      </div>
    )
  }
}

export default App;
