import USER_CONSTANTES from "./constantes"

export const signInUser = (user: any) => ({
    type: USER_CONSTANTES.SIGNIN_USER,
    payload: user
});

export const signoutUser = () => ({
    type: USER_CONSTANTES.SIGNOUT_USER
});