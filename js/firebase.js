$(function(){
	var showUserLocation = L.divIcon({className: 'showUser',iconSize: [7, 7]});
    var showUserPos = L.marker([0, 0], {icon: showUserLocation});
    var userPosRef = new Firebase ('https://barhop.firebaseio.com/users');
    var userPosID;

	$('.showPos2others a').click(function(e){
		e.preventDefault();

		navigator.geolocation.watchPosition(function(data) {
			console.log("i am moving")
		    var lat = data['coords']['latitude'];
		    var lng = data['coords']['longitude'];
		    var newLatLng = new L.LatLng(lat, lng);
		    var	newUserRef = new Firebase('https://barhop.firebaseio.com/users/' + userPosID);
		    
		    newUserRef.set({ 'LatLng': [lat,lng], 'time': Firebase.ServerValue.TIMESTAMP });

		    // showUserPos.setLatLng(newLatLng).addTo(map);
		});
	});

	var userMarkers = {};

	userPosRef.on("value", function(snapshot) {
	  var users = snapshot.val();
	  for (id in users) {
	    var user = users[id];
	    var userMarker = userMarkers[id];
	    var position = [parseFloat(user.LatLng[0]), parseFloat(user.LatLng[1])];
	    var lastUpdatedAt = parseFloat(user.time);
	    if ((new Date().getTime() - lastUpdatedAt) > 10000) {
	      if (userMarker) {
	        map.removeLayer(userMarker);
	        delete userMarkers[id];
	      }
	    } else {
	        if (!userMarker) {
	        userMarker = L.marker(position, { icon: showUserLocation });
	        userMarker.addTo(map);
	        userMarkers[id] = userMarker;
	      } else {
	        userMarker.setLatLng(new L.LatLng(position[0], position[1]));
	      }
	    }
	  }
	});


	var auth = new FirebaseSimpleLogin(userPosRef, function(error, user) {
  		if (error) {
  		  // an error occurred while attempting login
  		} else if (user) {
  		  userPosID = user.id;
  		  // user authenticated with Firebase
  		  console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
  		} else {
  		  auth.login('anonymous');
  		  // user is logged out
  		}
	});

});