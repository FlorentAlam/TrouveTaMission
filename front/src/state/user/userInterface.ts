export interface IUser{
    email: string,
    poste: string,
    ville: string,
    codePostal: string,
    telephone: string
}

export interface IUserState {
    logged: boolean,
    user: IUser
}