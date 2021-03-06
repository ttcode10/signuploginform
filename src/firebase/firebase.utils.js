import firebase from 'firebase/app';
import 'firebase/auth';
import config from './config';

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
}

export const logOut = () => {
  auth.signOut();
}

export default firebase;