import { createStore } from "redux";
import orderReducers from "../reducers/orderReducers";
import { applyMiddleware, compose} from "redux";
import firebase from "../firebase/Config"
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
// import UserReducer from './reducers/UserReducer' 
// import userReducer from "../reducers/UserReducer";


const Store = createStore(orderReducers,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
)
);


export default Store;