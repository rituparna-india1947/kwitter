var firebaseConfig = {
      apiKey: "AIzaSyCB5edNxUFSevpiQc3LPEOdQFdKzKJzt0c",
      authDomain: "kwitter-422b7.firebaseapp.com",
      databaseURL: "https://kwitter-422b7-default-rtdb.firebaseio.com",
      projectId: "kwitter-422b7",
      storageBucket: "kwitter-422b7.appspot.com",
      messagingSenderId: "621201930377",
      appId: "1:621201930377:web:8ecdb47d8ac485044dae58"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id = "+ Room_names+" onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirecttoroomname(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}