import {applyMiddleware, combineReducers, createStore} from "redux";
import loginReducer from "./loginReducer";
import regReducer from "./regReducer";
import recoverReducer from "./recoverReducer";
import profileReducer from "./profileReducer";
import thunkMiddleware from "redux-thunk"

const rootReducer = combineReducers({
    login: loginReducer,
    registration: regReducer,
    recover: recoverReducer,
    profile: profileReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;

// @ts-ignore
window.store = store;
