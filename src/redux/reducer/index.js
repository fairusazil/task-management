import {combineReducers} from 'redux'
import signupReducer from './SignupReducer'
import signinReducer from './SigninReducer'

const allReducers = combineReducers({
    userSignup : signupReducer,
    userSignin : signinReducer,
})

export default allReducers