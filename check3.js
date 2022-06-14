// Get a reference to the database service
var database = firebase.database();

// This is reference to tha database, to fetch data from database use below code:

var starCountRef = firebase.database().ref('discordId');
// Add ref of child if any
starCountRef.on('value', function(snapshot) {
    console.log(snapshot.val());
});
