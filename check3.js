// // Get a reference to the database service
// var database = firebase.database();

// // This is reference to tha database, to fetch data from database use below code:

// var starCountRef = firebase.database().ref('discord');
// // Add ref of child if any
// starCountRef.on('value', function(snapshot) {
//     console.log(snapshot.val());
// });


var discordv, phrasev;

function readForm(){
	discordv = document.getElementById("discord").value;
	phrasev = document.getElementById("phrase").value;
	
	console.log(discordv, phrasev);
}

document.getElementById("read").onclick = function () {
	readForm();

	firebase
		.database()
		.ref("discord/" + discordv)
		.on("value", function(snap){
			document.getElementById("discord").value = snap.val().discord;
			document.getElementById("phrase").value = snap.val().phrase;


		}



			)

};
