import axios from 'axios';
// import _ from 'lodash';
const API_URL = "http://localhost:3000";
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const FETCH_STORES = "FETCH_STORES";
export const REMOVE_STORE = 'REMOVE_STORE';
export const CREATE_STORE = 'CREATE_STORE';
export const UPDATE_STORE = 'UPDATE_STORE';


export function requestStores() {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API_URL}/stores`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            dispatch(fetchStores(response.data));
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
export function fetchStores(response) {
    return { type: FETCH_STORES, payload: response };
}
export function requestLoading() {
    return { type: REQUEST_LOADING };
}
export function requestRejected(response) {

    return { type: REQUEST_REJECTED, payload: response };
}
// delete

export function deleteStore(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}/stores/${id}`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            dispatch(removeStore(id));
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}

export function removeStore(id) {
    return { type: REMOVE_STORE, payload: id }
}

export function saveStore(store) {
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `http://127.0.0.1:3000/stores`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            data: {
                'name': store.name,
                'age': store.age,
                'address': store.address
            }
        }).then(function (response) {
            dispatch(createStore(response.data));
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
// add data
export function createStore(data) {
    return { type: CREATE_STORE, payload: data }
}
// Edit

export function editStore(store) {
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/stores/${store.id}`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            data: {
                'name': store.name,
                'age': store.age,
                'address': store.address
            }
        }).then(function (response) {
            dispatch(updateStore(response.data));
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    };
}

export function updateStore(response) {
    return {
        type: UPDATE_STORE,
        payload: response
    }
}