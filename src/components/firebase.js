import * as firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDsB-4sF2ykC6-iRpNg13jVPeiAWShowrw',
  authDomain: 'chatbotcoc.firebaseapp.com',
  databaseURL: 'https://chatbotcoc.firebaseio.com',
  projectId: 'chatbotcoc',
  storageBucket: 'chatbotcoc.appspot.com',
  messagingSenderId: '881442453519'
}
firebase.initializeApp(config)
export default ! firebase.apps.length ? firebase.initializeApp(config) : firebase.app()