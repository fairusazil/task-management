import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL;

export const addUser = (values) => {
    return (dispatch) => {
        return axios
            .post(`${apiUrl}/users`, values)
            .then((response) => {
                dispatch(addUserSuccess(response.data))
            })
            .catch((error) => {
                alert(error.response.data)
                throw error;
            })
    }
}

export const addUserSuccess = (data) => {
    return {
        type: 'POST_USER',
        playload: { data }
    }
}