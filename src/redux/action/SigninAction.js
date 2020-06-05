import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL;

export const signinUser = (values, history) => {
    return (dispatch) => {
        return axios
            .post(`${apiUrl}/users/signin`, values)
            .then((response) => {
                // console.log(response);
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('role', response.data.role);
                localStorage.setItem('isLoggedIn', true);
                dispatch(newSignin(response.data.role, history))

            })
            .catch((error) => {
                // console.log(error);
                
                alert(error.response.data)
                throw error;
            })
    }
}

export const newSignin = (data, history) => {
    return () => {
        if (data === 'manager') {
            history.push('/manager')
        }
        else if (data === 'employee') {
            history.push('/employee')
        }
        console.log(data);
    }
}

export const signinSuccess = (data) => {
    return {
        type: 'LOGIN',
        playload: { data }
    }
}