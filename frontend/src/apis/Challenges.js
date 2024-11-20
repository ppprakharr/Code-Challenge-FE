import { BASE_API, DOMAIN } from './config'

export const addChallenge = async (jwtToken, bodyObject) => {

    // POST request options
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': jwtToken
        },
        body: JSON.stringify(bodyObject)
    };

    // Make the POST request
    try {
        const response = await fetch(`${BASE_API}/challenges`, requestOptions);
        if (response.ok) {

            return [response, '']
        }
        if (response.status === 401) {
            const errorData = await response.json();
            return ['', 'Unauthorised user. Cannot add challenge']
        }
        const errorMessage = await response.text();
        return ['', `server side error: ${errorMessage}`]

    } catch (error) {
        return ['', `server down: ${error}`]
    }
}

export const getActiveAndUpcomingChallenges = async (jwtToken, bodyObject) => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': jwtToken
        },
    };


    try {
        const response = await fetch(`${BASE_API}/challenges/active_and_upcoming`, requestOptions);
        if (response.ok) {

            return [response, '']
        }
        if (response.status === 401) {
            const errorData = await response.json();
            return ['', 'Unauthorised user. Cannot add challenge']
        }
        const errorMessage = await response.text();
        return ['', `server side error: ${errorMessage}`]

    } catch (error) {
        return ['', `server down: ${error}`]
    }
}

export const getChallengeById = async (jwtToken, id) => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': jwtToken
        },
    };


    try {
        const response = await fetch(`${BASE_API}/challenges/${id}`, requestOptions);
        if (response.ok) {

            return [response, '']
        }
        if (response.status === 401) {
            const errorData = await response.json();
            return ['', 'Unauthorised user. Cannot access challenge']
        }
        const errorMessage = await response.text();
        return ['', `server side error: ${errorMessage}`]

    } catch (error) {
        return ['', `server down: ${error}`]
    }
}