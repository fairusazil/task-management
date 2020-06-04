const signupReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_USER':
            return action.playload.data;
        case 'POST_USER':
            return action.playload.data;
        default:
            return state
    }
}
export default signupReducer;