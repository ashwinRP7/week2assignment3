import React from 'react';
import './Seller.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect
  } from "react-router-dom";

  import {connect} from 'react-redux';
import {addToCartAction,reMoveFromCart,increment,decrement,logoutUser,wrongCredentials,rightCredentials,loginUser} from './actions';
  
  import SellerList from './SellerList'
  import Product from './Product'
  import Logout from './Logout'
  import Login from './Login'

  class Seller extends React.Component{
      constructor(props){
          super(props);
          const currentUser = localStorage.getItem('currentUser');
          let isLoggedIn = true
          if(currentUser == null){
              isLoggedIn = false
          }
          //let x = this.props.counter
          this.state={
              isLoggedIn,
              cartItem:[],
              //x
          }

          
      }
      
      addToCart(newItem){
        this.setState({
            cartItem:[...this.state.cartItem,newItem]
        })        
        this.props.addToCartAction();
    }

    removeFromCart(ind){
        this.setState({
            cartItem:[...this.state.cartItem].filter((item)=> item.id!=ind.i)
        });
        this.props.reMoveFromCart();
        //console.log(ind);

    }
      render(){
          if(this.props.isLogged === false){
            alert("Error : You are not logged in !!!")  
            return <Redirect to='/'/>
            
          }
          
          if(this.props.newToCart === true){
              alert("Warning : item added to the cart !")
                this.props.reMoveFromCart();
            }
          return(
              <Router>
                  <div>
                      
                      <Switch>
                        <Route exact path='/seller'>
                            <SellerList></SellerList>
                        </Route>
                        <Route path='/seller/:sid' children={<Product obj={{array:this.state.cartItem,addToCart:this.addToCart.bind(this),removeFromCart:this.removeFromCart.bind(this)}}></Product>}>

                        </Route>
                        <Route path='/logout' component={Logout}></Route>
                        <Route path='/' component={Login}></Route>
                      </Switch>
                  </div>
              </Router>
          );
      }
  }
  
const mapStateToProps = (state)=>{
    return {
      correctCredentials : state.correctCredentials,
      isLogged : state.isLogged,
      counter:state.counter
    }
}

const mapDispatchToProps = () =>{
    return {
        wrongCredentials,rightCredentials,loginUser,
      logoutUser,increment,decrement,reMoveFromCart,addToCartAction
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(Seller);