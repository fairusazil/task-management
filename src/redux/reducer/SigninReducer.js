const signinReducer=(state=[], action)=>{
    switch (action.type) {
        case 'LOGIN':
            return action.playload.data;
            default:
                return state;
    }
}

export default signinReducer;