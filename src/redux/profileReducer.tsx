// const SET_NAME = 'SET_NAME';
const IS_AUTH = 'IS_AUTH';

interface IInitialState {
    name: string
    isAuth: boolean
}

const initialState: IInitialState = {
    name: '',
    isAuth: false
};

const profileReducer = (state: IInitialState = initialState, action: any): IInitialState => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                name: action.name,
                isAuth: action.success
            };
        default:
            return state;
    }
};

export const isAuthAC = (success: boolean, name: string) => ({type: IS_AUTH, success, name});

export default profileReducer