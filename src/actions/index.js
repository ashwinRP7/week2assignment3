export const increment = () =>{
    return{
        type:'INCREMENT'
    }
    
}

export const decrement = () =>{
    return{
        type:'DECREMEMT'
    }
}

export const wrongCredentials = ()=>{
    return{
        type:'WRONG_CREDENTIALS'
    }
}

export const rightCredentials = () =>{
    return{
        type:'RIGHT_CREDENTIALS'
    }
}

export const loginUser = () => {
    return {
        type : 'LOGIN_USER'
    }

}

export const logoutUser = () => {
    return {
        type : 'LOGOUT_USER'
    }

}

export const addToCartAction = () => {
    return {
        type:'addToCart'
    }
}

export const reMoveFromCart = () =>{
    return{
        type : 'reMoveFromCart'
    }
}