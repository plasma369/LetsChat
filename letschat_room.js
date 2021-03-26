var firebaseConfig = {
    apiKey: "AIzaSyBCTwGYP7BdeKneg1IcV5I8OH-_7Sq8_mY",
    authDomain: "chat-website-64ec5.firebaseapp.com",
    databaseURL: "https://chat-website-64ec5-default-rtdb.firebaseio.com",
    projectId: "chat-website-64ec5",
    storageBucket: "chat-website-64ec5.appspot.com",
    messagingSenderId: "528563953774",
    appId: "1:528563953774:web:d0ed6bd8b8d4a3ac79c67f"
  };
firebase.initializeApp(firebaseConfig);

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    perpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "LetsChat.html";
}

function logout()
{
    window.location = "index.html"
}