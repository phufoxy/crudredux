import { FETCH_STORES, REQUEST_LOADING, REQUEST_REJECTED, REMOVE_STORE, CREATE_STORE, UPDATE_STORE } from '../actions/store';
const INITIAL_STATE = {
    all: [],
    store: [],
    fetching: false,
    fetched: false,
    error: null
}
export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case REQUEST_LOADING:
            return Object.assign({}, state, {
                ...state,
                fetching: true,
                fetched: INITIAL_STATE.fetched
            });
        case REQUEST_REJECTED:
            return Object.assign({}, state, {
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload.data
            });
        case FETCH_STORES:
            return Object.assign({}, state, {
                store: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            });
        case CREATE_STORE:
            return Object.assign({}, state, {
                store: [...state.store, action.payload] //add data to store
            });
        case UPDATE_STORE:
            const indexItem = state.store.findIndex(i => i.id === action.payload.id)
            var dataEdit = [...state.store];
            dataEdit[indexItem].name = action.payload.name;
            dataEdit[indexItem].age = action.payload.age;
            dataEdit[indexItem].address = action.payload.address;
            return Object.assign({}, state, {
                store: dataEdit
            })

        case REMOVE_STORE:
            return Object.assign({}, state, {
                store: state.store.filter(item => item.id !== action.payload)
            });
        default:
            return state;
    }
}