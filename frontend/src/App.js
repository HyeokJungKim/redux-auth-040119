import React from 'react';

// REDUX
import {connect} from 'react-redux'
import {fetchSnacks} from './Redux'

// ROUTING
import {Switch, Route, Link} from 'react-router-dom'

import LoginForm from './Components/LoginForm'
import SnackContainer from './Containers/SnackContainer'
import ProfileContainer from './Containers/ProfileContainer'


import {sendTokenBackToPersist} from './Redux/index'

class App extends React.Component{

  componentDidMount() {
    this.props.fetchSnacks()
    if (localStorage.getItem("token")) {
      this.props.sendTokenBackToPersist(localStorage.getItem("token"))
    }
  }

  render(){
    return (
      <div>
        <h1>WELCOME TO WILLY WONKA'S CANDY STORE</h1>
        <img alt="wonka" src="https://www.nestleusa.com/asset-library/PublishingImages/Media/PR/wonka.jpg"/>
        <br/>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/snacks">Snacks</Link>
        <br/>
        <Link to="/profile">Profile</Link>

        <Switch>
          <Route path='/login' render={(routerProps) => <LoginForm {...routerProps}/>}/>
          <Route path='/snacks' render={(routerProps) => <SnackContainer {...routerProps}/>}/>
          <Route path='/profile' render={(routerProps) => <ProfileContainer {...routerProps}/>}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps, {fetchSnacks, sendTokenBackToPersist})(App);









//
