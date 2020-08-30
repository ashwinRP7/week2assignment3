import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
  } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {wrongCredentials,rightCredentials,loginUser} from './actions';

  class Login extends React.Component{
      constructor(props){
          super(props);
          const currentUser = localStorage.getItem('currentUser')
          let isLoggedIn = true
          if(currentUser == null){
            isLoggedIn = false
          }

          this.state = {
              email:"",
              password:"",
              isLoggedIn
          }
          this.handleChange = this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
      }

      

      handleChange(event){
          let name = event.target.name;
          let value = event.target.value;
          this.setState({
              [name]:value
          })
      }

      handleSubmit(event){
        event.preventDefault();
        let userEmail = this.state.email;
        let userPassword = this.state.password;
        localStorage.setItem('email','user@gmail.com');
        localStorage.setItem('password','user');
        // const hasUserEnteredCorrectCredentials = useSelector(state => state.correctCredentials);
        // const dispatch = useDispatch();
        
        if(userEmail === "user@gmail.com" && userPassword === "user"){
            this.setState({
                isLoggedIn:true
            })
            this.props.rightCredentials();
            this.props.loginUser();
            localStorage.setItem('currentUser',userEmail);
        }
        else{
            
            this.props.wrongCredentials();
            //console.log(v);
            alert("Error : Please enter correct credentials!");
        }
      }
      
      render(){
          if(this.props.isLogged){
              return <Redirect to='/seller'/>
                    
          }
          let u = {
              padding:'20px',
              marginLeft:'450px',
              border : '1px solid #dcdcdc',
              marginTop : '300px',
              width:'400px',
              backgroundColor:'#E0FFFA'

          }
          return(
              <div style = {u}>
                  <h1>Please Login</h1>
                  <form onSubmit={this.handleSubmit}>
                    <input placeholder="Email" type="text" name="email" onChange={this.handleChange}></input>
                    <br></br>
                    <br></br>
                    <input placeholder="Password" type="text" name="password" onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <input type="submit" value="Submit"></input>
                  </form>
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
        rightCredentials,
        loginUser
      }
  }

  export default connect(mapStateToProps,mapDispatchToProps())(Login);