function initDb() {


    
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC6eAPWuYgz1OEsS8mvrkNfu4XYduyD5aE",
      authDomain: "project1-8e6c3.firebaseapp.com",
      databaseURL: "https://project1-8e6c3.firebaseio.com",
      projectId: "project1-8e6c3",
      storageBucket: "project1-8e6c3.appspot.com",
      messagingSenderId: "853012909302"
    };
    firebase.initializeApp(config);
    database = firebase.database();
  }
  
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  
  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });
  
  ui.start('#firebaseui-auth-container', {
    signInOptions =[
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        scopes: [
          'https://www.googleapis.com/auth/plus.login'
        ],
        customParameters: {
          // Forces account selection even when one account
          // is available.
          prompt: 'select_account'
        }
      },
      {
        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        scopes: [
          'public_profile',
          'email',
          'user_likes',
          'user_friends'
        ],
        customParameters: {
          // Forces password re-entry.
          auth_type: 'reauthenticate'
        }
      },
    ]
  });