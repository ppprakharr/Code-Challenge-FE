import { DOMAIN } from './config'

export const registerApi = async (bodyObject) => {

    // POST request options
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObject)
    };

    // Make the POST request
    try {
        const response = await fetch(`${DOMAIN}/users`, requestOptions);
        if (response.ok) {

            return [response, '']
        }
        if (response.status === 422) {
            const errorData = await response.json();
            return ['', errorData.message ||'User Already Exists.']
        }
        const errorMessage = await response.text();
        return ['', `server side error: ${errorMessage}`]

    } catch (error) {
        return ['', `server down: ${error}`]
    }
}

export const loginApi = async (bodyObject) => {

    // POST request options
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObject)
    };

    // Make the POST request
    try {
        const response = await fetch(`${DOMAIN}/users/sign_in`, requestOptions);
        if (response.ok) {

            return [response, '']
        }
        if (response.status === 401) {
            return ['', 'Invalid email or password.']
        }
        const errorMessage = await response.text();
        return ['', `server side error: ${errorMessage}`]

    } catch (error) {
        return ['', `server down: ${error}`]
    }


}

export const logoutApi = async (jwtToken) => {

    // POST request options
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': jwtToken
        }
    
    };

    // Make the POST request
    try {
        const response = await fetch(`${DOMAIN}/users/sign_out`, requestOptions);
        if (response.ok) {

            return [response, '']
        }
        if (response.status === 401) {
            return ['', 'Invalid email or password.']
        }
        const errorMessage = await response.text();
        return ['', `server side error: ${errorMessage}`]

    } catch (error) {
        return ['', `server down: ${error}`]
    }


}