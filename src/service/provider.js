const baseURL = "http://139.162.46.91:9999";
import firebase from 'firebase';

const  config = {
    apiKey: "AIzaSyBtsxSgIdKE7-GIvgYfj31KTtsMMJOUjBI",
    authDomain: "thecake.firebaseapp.com",
    databaseURL: "https://thecake.firebaseio.com",
    projectId: "thecake",
    storageBucket: "thecake.appspot.com",
    messagingSenderId: "1076146761077"
};
export const app = firebase.initializeApp(config);
export const provider = {
    baseURL: baseURL,
    prefix: "/api/v1",
    isSuper: (roles) => roles.includes('super'),
    isAdmin: (roles) => roles.includes('admin'),
    isGM: (roles) => roles.includes('gm'),
    isCashier: (roles) => roles.includes('cashier'),
    isDecore: (roles) => roles.includes('decore'),
    isPublic: (roles) => roles.length >= 0 // we dont care whether role you are
};