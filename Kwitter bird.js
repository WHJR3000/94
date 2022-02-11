var firebaseConfig = { apiKey: "AIzaSyDaCONVl7DnOLpYL6GBCROBGK1JVrjzuzM",
authDomain: "social-website-6ec27.firebaseapp.com",
 databaseURL: "https://social-website-6ec27-default-rtdb.firebaseio.com",
 projectId: "social-website-6ec27",
  storageBucket: "social-website-6ec27.appspot.com", 
 messagingSenderId: "720345163374", 
 appId: "1:720345163374:web:7e0ae21e81e8b385c3687f",
  measurementId: "G-P7KCPNRMBY" };
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("Username");
document.getElementById("Starlight").innerHTML="Welcome "+ user_name+ " To pesky bird have fun"
var userName=localStorage.getItem()
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
  

      
      });});}
getData();
