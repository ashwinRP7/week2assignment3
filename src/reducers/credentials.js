const credentials = (state = false , action) =>{
    switch(action.type){
        case 'WRONG_CREDENTIALS':{
            return state;
        }
        case 'RIGHT_CREDENTIALS':{
            return !state;
        }
        case 'LOGOUT_USER':{
            return !state;
        }
        default:{
            return state;
        }
    }
};

export default credentials;