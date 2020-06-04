import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL;

export const signinUser = (values) => {
    return (dispatch) => {
        return axios
            .post(`${apiUrl}/users/signin`, values)
            .then((response) => {
                console.log(response);
                
            })
            .catch((error) => {
                alert(error.response.data)
                throw error;
            })
    }
}

export const signinSuccess = (data) => {
    return {
        type: 'LOGIN',
        playload: { data }
    }
}