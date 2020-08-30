const newToCartReducer = (state = false , action) =>{
    switch(action.type){
        case 'addToCart':{
            return true;    
        }
        case 'reMoveFromCart':{
            
            return false;
        }
        default:{
            return state;
        }
    }
};

export default newToCartReducer;