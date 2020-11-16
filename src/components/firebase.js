import * as firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDsB-4sF2ykC6-iRpNg13jVPeiAWShowrw',
  authDomain: 'chatbotcoc.firebaseapp.com',
  databaseURL: 'https://chatbotcoc.firebaseio.com',
  projectId: 'chatbotcoc',
  storageBucket: 'chatbotcoc.appspot.com',
  messagingSenderId: '881442453519',
  appId: '1:881442453519:web:6ca8b809d88e557615cb7a',
  measurementId: 'G-KH6375N5ND'
}

firebase.initializeApp(config)
export default ! firebase.apps.length ? firebase.initializeApp(config) : firebase.app()