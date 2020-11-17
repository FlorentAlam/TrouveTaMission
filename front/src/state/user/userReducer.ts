import USER_CONSTANTES from "./constantes";

const initialState: any = {
    logged: false,
    user: {}
};

type ActionType = {
    type: string,
    payload: any
}

const userReducer = (state = initialState, action: ActionType) => {
    switch(action.type){
        case USER_CONSTANTES.SIGNIN_USER:
            return {
                logged: true,
                user: action.payload
            };
        case USER_CONSTANTES.SIGNOUT_USER:
            return {
                logged: false,
                user: {}
            }
        default:
            return state;
    }
}

export default userReducer;