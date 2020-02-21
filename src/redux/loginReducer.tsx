interface IInitialState {}
const initialState: IInitialState = {};

const loginReducer = (state: IInitialState = initialState, action: any): IInitialState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default loginReducer