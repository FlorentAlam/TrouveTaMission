import * as actions from './userActions';
import USER_CONSTANTES from './constantes';

describe('actions', () => {
    it('should create an action to signin user', () => {
        const expectedAction = {
            type: USER_CONSTANTES.SIGNIN_USER,
            payload: {
                nom: 'Nicolas'
            }
        }

        expect(actions.signInUser({nom: 'Nicolas'})).toEqual(expectedAction);
    });

    it('should create an action to logout user', () => {
        const expectedAction = {
            type: USER_CONSTANTES.SIGNOUT_USER
        };
        expect(actions.signoutUser()).toEqual(expectedAction);
    })
})