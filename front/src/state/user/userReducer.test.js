import USER_CONSTANTES from './constantes';
import userReducer from './userReducer';

describe('user reducer', () => {
    it('should return initial state', () => {
        expect(userReducer(undefined, {})).toEqual({
            logged: false,
            user: {}
        });
    });
    it('should handle SIGNIN_USER', () => {
        expect(userReducer({}, {
            type: USER_CONSTANTES.SIGNIN_USER,
            payload: {
                name: "nicolas"
            }
        })).toEqual({
            logged: true,
            user: {
                name: 'nicolas'
            }
        });
    });
    it('should handle SIGNOUT_USER', () => {
        expect(userReducer({}, {
            type: USER_CONSTANTES.SIGNOUT_USER
        })).toEqual({
            logged: false,
            user: {}
        });
    })
});