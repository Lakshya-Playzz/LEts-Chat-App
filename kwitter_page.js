const firebaseConfig = {
    apiKey: "AIzaSyC-Yk6z2dkyifIBWunry3QqgBQYE5gbhps",
    authDomain: "kwitter-aa312.firebaseapp.com",
    databaseURL: "https://kwitter-aa312-default-rtdb.firebaseio.com",
    projectId: "kwitter-aa312",
    storageBucket: "kwitter-aa312.appspot.com",
    messagingSenderId: "108333788846",
    appId: "1:108333788846:web:1afef637c8045edfb0873f"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name")
   room_name = localStorage.getItem("room_name")
   