var firebaseConfig = {
    apiKey: "AIzaSyAuXVvG6ZpotbmUj_O1CDgSJnIhCetMuuI",
    authDomain: "kwitter-3a67f.firebaseapp.com",
    databaseURL: "https://kwitter-3a67f-default-rtdb.firebaseio.com",
    projectId: "kwitter-3a67f",
    storageBucket: "kwitter-3a67f.appspot.com",
    messagingSenderId: "480121075010",
    appId: "1:480121075010:web:95018f58508b947e2504db"
};
firebase.initializeApp(firebaseConfig);

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = ""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value"+like+"onclick='updatelike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>"+ like +"</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("outut").innerHTML += row;

} });  }); }
getData();

function updateLike(message_id) 
{ 
    console.log("clicked on like button - " + message_id); 
    button_id = message_id; likes = document.getElementById(button_id).value; 
    updated_likes = Number(likes) + 1; 
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}

function logout() 
{ 
    localStorage.removeItem("user_name"); 
    localStorage.removeItem("room_name"); 
    window.location.replace("kwitter.html"); 
}