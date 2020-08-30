import React from 'react';
import {Link,useParams} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import cartimg from './cart.png'
import item1 from './001.jpg'
import item2 from './002.jpg'
import item3 from './003.jpg'
import item4 from './004.jpg'
import cartImage from './cart.png'
import Navbar from './Navbar'
import PropTypes from 'prop-types';
import {addToCartAction,reMoveFromCart} from './actions'

function Product(props)  {
            let seller1=[{name:"Item 1",price:10,source:item1,id:1},{name:"Item 2",price:20,source:item2,id:2},{name:"Item 3",price:30,source:item3,id:3}];
            let seller2=[{name:"Item 2",price:20,source:item2,id:4},{name:"Item 4",price:40,source:item4,id:5}];
            let seller3=[{name:"Item 4",price:40,source:item4,id:6}];
           // let {n} = useParams();

            let { sid } = useParams();
            //let n = props.match.params.sid
            //console.log({sid})
            let productList,cartitems,cartTotal;
            let sty = {
                padding:'20px',
                border : '1px solid #dcdcdc',
                width:'300px',
                margin:'20px'
            }
            let btnstyle = {
                padding:'10px',
                backgroundColor:'green',
                color:'white'
            }
            switch({sid}.sid){
                case "1":{
                    productList = seller1.map((item)=>
                        <div key={item.id} style={sty}>
                            <img src={item.source}></img>
                            <br></br>
                            <p>{item.name}</p>
                            <p>Price : ${item.price}</p>
                            <button style={btnstyle} onClick={()=>props.obj.addToCart({name:item.name,cost:item.price,id:item.id})}>Add to cart</button>
                        </div>
                    );
                    break;
                }
                case "2":{
                    productList = seller2.map((item)=>
                        <div key={item.id} style={sty}>
                            <img src={item.source}></img>
                            <br></br>
                            <p>{item.name}</p>
                            <p>Price : ${item.price}</p>
                            <button style={btnstyle} onClick={()=>props.obj.addToCart({name:item.name,cost:item.price,id:item.id})}>Add to cart</button>
                        </div>
                    );
                    break;
                }
                case "3":{
                    productList = seller3.map((item)=>
                        <div key={item.id} style={sty}>
                            <img src={item.source}></img>
                            <br></br>
                            <p>{item.name}</p>
                            <p>Price : ${item.price}</p>
                            <button style={btnstyle} onClick={()=>props.obj.addToCart({name:item.name,cost:item.price,id:item.id})}>Add to cart</button>
                        </div>
                    );
                    break;
                }
            }
            let x = {display:"inline",margin:'10px'};
        let y = {backgroundColor:'red',borderRadius:'50%'};
            cartitems = props.obj.array.map((item)=>
                <div key={item.id}>
                    <p style={x}>{item.name}</p>
                    <button style={y}onClick={()=>props.obj.removeFromCart({i:item.id})}>X</button>
                </div>
            );
            
            cartTotal = props.obj.array.reduce((totalSum,item) => totalSum+item.cost,0);
            //cartitems=<CarList obj={{array:this.state.cartItem,removeFromCart:this.removeFromCart.bind(this)}}/>;
            // let cartItemList = this.props.obj.array.map((item)=>
            //     <div key={item.id}>
            //         <p>{item.name}</p>
            //         <button onClick={()=>this.props.obj.removeFromCart({i:item.id})}>X</button>
            //     </div>
            // );

            const hasUserAddedToCart = useSelector(state => state.newToCart);
            const dispatch = useDispatch();

            if(hasUserAddedToCart === true){
                alert("Warning : Adding product to the cart !")
                dispatch(reMoveFromCart());
            }
            
            return(          
                <div>
                    <Navbar></Navbar>
                    <h1>Product list of Seller {sid}</h1>
                    <div className="row">
                        <div className="col1">
                            {productList}
                        </div>
                        <div className="col2">
                            <img src={cartImage}></img>
                            {cartitems}
                            <h3>Cart Total : {cartTotal}</h3>
                        </div>
                    </div>
                </div>    
            );
        
        
    
}

Product.propTypes = {
    //obj : PropTypes.object,
    obj: PropTypes.object,
}

export default Product;