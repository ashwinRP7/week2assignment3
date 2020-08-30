import React from 'react';
import {Link} from "react-router-dom";
import Navbar from './Navbar'
class SellerList extends React.Component{
    render(){
        let y = {
            width:'300px',
            height:'300px',
            float:'left',
            border:'1px solid #dcdcdc',
            margin:'20px',
            padding:'20px',
            backgroundColor:'#E0FFFA',
            color:'black',
            textAlign:'center'
        }
        let z = {
            display:'inline'
        }
        return(
            <div>
                <Navbar></Navbar>
                <ul >
                    <li style={z}><Link to='/seller/1'><div style={y}><h1>Seller 1</h1></div></Link></li>
                    <li style={z}><Link to='/seller/2'><div style={y}><h1>Seller 2</h1></div></Link></li>
                    <li style={z}> <Link to='/seller/3'><div style={y}><h1>Seller 3</h1></div></Link></li>                    
                </ul>
            </div>
                
        );
    }
}

export default SellerList;