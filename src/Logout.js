import React from 'react';
import {connect} from 'react-redux';
import {wrongCredentials,logoutUser} from './actions';
import {
    BrowserRouter as Router,
    Link,
    Redirect
  } from "react-router-dom";

  class Logout extends React.Component{
      constructor(props){
          super(props);
          localStorage.removeItem('currentUser');
        }
      render(){
          this.props.logoutUser();
          this.props.wrongCredentials();
          alert("Success : You have been logged out");
          return(
              <div>
                  Logout page<br></br>
                  <Redirect to='/'/>
              </div>
          );
      }
  }


  const mapStateToProps = (state)=>{
    return {
      correctCredentials : state.correctCredentials,
      isLogged : state.isLogged
    }
}

const mapDispatchToProps = () =>{
    return {
      wrongCredentials,
      logoutUser
    }
}
  export default connect(mapStateToProps,mapDispatchToProps())(Logout);