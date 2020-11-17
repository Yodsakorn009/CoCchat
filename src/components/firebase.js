import * as firebase from 'firebase'

var config = { 
    apiKey: 'AIzaSyCmxv3_st5huNR3YJZYD7SeRT3gdcdtrUA',
    authDomain: 'chatbot01-hucg.firebaseapp.com',
    databaseURL: 'https://chatbot01-hucg.firebaseio.com',
    projectId: 'chatbot01-hucg',
    storageBucket: 'chatbot01-hucg.appspot.com',
    messagingSenderId: '497132394892',
    appId: '1:497132394892:web:8aa313b975df8839291ea9',
    measurementId: 'G-GR10QNQY42'
}

firebase.initializeApp(config)
export default ! firebase.apps.length ? firebase.initializeApp(config) : firebase.app()