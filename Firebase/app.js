
const firebaseConfig = {
  apiKey: "AIzaSyCV2S7sXPrZ0L2W-qzwWtKCdp2T2qGVQ5c",
  authDomain: "authclass1.firebaseapp.com",
  projectId: "authclass1",
  storageBucket: "authclass1.appspot.com",
  messagingSenderId: "612199620507",
  appId: "1:612199620507:web:3c49e7a60a848b491d0b3e",
  measurementId: "G-SX6R0ZQBB1"
};

// Initialize Firebase
var firebase = firebase.initializeApp(firebaseConfig);

function getValue(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    window.location.herf = 'dashboard.html'
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });

}