export const ERRORS = {
    PASSWORD_LENGTH: 'Votre mot de passe doit comporter au moins 6 caractères.',
    EMAIL_FORMAT: 'Veuillez entrer une adresse email correcte.',
    EMAIL_ALREADY_EXISTS: 'Un utilisateur existe déjà pour cette adresse email',
    INTERNAL_ERROR: 'Une erreur est subvenue, veuillez réessayer ultérieurement',
    USER_NOT_FOUND: 'Aucun utilisateur n\'existe pour ces identifiants de connexion.',
    WEAK_PASSWORD: 'Votre mot de passe n\'est pas assez sécurisé.',
    DIFFERENT_PASSWORDS: 'Vos mots de passe ne correspondent pas.'
}

export const FIREBASE_ERRORS = {
    'auth/invalid-email': {error: true, message: ERRORS.EMAIL_FORMAT},
    'auth/email-already-in-use': {error: true, message: ERRORS.EMAIL_ALREADY_EXISTS},
    'auth/internal-error': {error: true, message: ERRORS.INTERNAL_ERROR},
    'auth/invalid-password': {error: true, message: ERRORS.PASSWORD_LENGTH},
    'auth/user-not-found': {error: true, message: ERRORS.USER_NOT_FOUND},
    'auth/weak-password': {error: true, message: ERRORS.WEAK_PASSWORD}
}