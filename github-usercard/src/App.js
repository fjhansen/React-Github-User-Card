import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './Components/UserCard'

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
      console.log(res.data)
      this.setState({
        main: res.data
      })
      return res.data.followers_url
    })
    
  }

  render(){
    return(
      <div>
        <h1>User Cards</h1>
        <UserCard/>
      
      </div>
    )
  }
}

export default App;
