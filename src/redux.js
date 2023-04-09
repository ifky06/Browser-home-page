import { createStore } from 'redux';

const SET_USERNAME = "SET_USERNAME";
const SET_CITY = "SET_CITY";

const initialState = {
    username: localStorage.getItem('username') || 'user',
    city: localStorage.getItem('city') || 'Malang',
}

export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        payload: username
    }
}

export const setCity = (city) => {
    return {
        type: SET_CITY,
        payload: city
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, username: action.payload };
        case SET_CITY:
            return { ...state, city: action.payload };
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;

