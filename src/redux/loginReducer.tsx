import {Dispatch} from "redux";
import {api} from "../api/api";
import {isAuthAC} from "./profileReducer";

const SET_DATA = 'SET_DATA';

interface IInitialState {
    title: string
    email: string
    password: string
    rememberMe: boolean
}

const initialState: IInitialState = {
    title: 'Login',
    email: 'test@email.nya',
    password: 'ftc{.}mxy~gub%jzc',
    rememberMe: false,
};

const loginReducer = (state: IInitialState = initialState, action: any): IInitialState => {
    switch (action.type) {

        case SET_DATA:
            return {
                ...state,
                email: action.data.email,
                password: action.data.password,
                rememberMe: action.data.rememberMe
            };

        default:
            return state;
    }
};

export const setDataAC = (data: any) => ({type: SET_DATA, data});

export const sendDataTC: Function = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    api.sendData(email, password, rememberMe)
        .then(res => {
            if (res.status === 200) {
                dispatch(setDataAC(res.data));
                dispatch(isAuthAC(true, res.data.name))
            }
        })
};

export default loginReducer