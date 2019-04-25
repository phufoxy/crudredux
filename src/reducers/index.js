import { combineReducers } from 'redux';
import StoreReducer from './store';
const rootReducer = combineReducers({
    stores: StoreReducer
});
export default rootReducer;
