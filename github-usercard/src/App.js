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
      <div style={{width: '1600px', height: '900px', margin: 'auto', display: 'flex', justifyContent:'center', backgroundImage:'linear-gradient(to right top, #030d22, #172459, #4c338f, #9534bb, #ea00d9)'}}>
        <h1 style={{textAlign:'center' , margin: '3% 2%', color: '#DA707F'}}>User Cards</h1>
        <div style={{maxWidth:''}}>
         <UserCard main={this.state.main}/> 
        </div>
        
        <div style={{width: '1500px', height: '900px', display:'flex', flexWrap:'wrap', margin: 'auto'}}>
        <FollowersCard followers={this.state.followers}/>
        </div>
      
      </div>
    )
  }
}

export default App;
