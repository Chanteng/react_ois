import { createStore } from "redux";
import orderReducers from "../reducers/orderReducers";

// import UserReducer from './reducers/UserReducer' 
// import userReducer from "../reducers/UserReducer";


const Store = createStore(orderReducers)

export default Store;