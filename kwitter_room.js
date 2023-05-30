var firebaseConfig = {
    apiKey: "AIzaSyCC79gj5ZfZbhWkKagcWZJ39E2yqqvk4rw",
    authDomain: "kwitter-b4a5a.firebaseapp.com",
    databaseURL: "https://kwitter-b4a5a-default-rtdb.firebaseio.com",
    projectId: "kwitter-b4a5a",
    storageBucket: "kwitter-b4a5a.appspot.com",
    messagingSenderId: "235648142045",
    appId: "1:235648142045:web:0542bc4e5b21451ef06934"
  };
  firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
