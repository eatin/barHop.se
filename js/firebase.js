$(function(){
	var showUserLocation = L.divIcon({className: 'showUser',iconSize: [7, 7]});
    var showUserPos = L.marker([0, 0], {icon: showUserLocation});
    var userPosRef = new Firebase ('https://barhop.firebaseio.com/users');

	$('.showPos2others a').click(function(e){
		e.preventDefault();
		
		var userPos = userPosRef.push({ 'LatLng': ['0','0'] }),
			userPosID = userPos.name();

		navigator.geolocation.watchPosition(function(data) {
		    var lat = data['coords']['latitude'];
		    var lng = data['coords']['longitude'];
		    var newLatLng = new L.LatLng(lat, lng);
		    var	newUserRef = new Firebase ('https://barhop.firebaseio.com/users/' + userPosID);
		    
		    newUserRef.set({ 'LatLng': [lat,lng] });

		    showUserPos.setLatLng(newLatLng).addTo(map);

		    setTimeout(function(){
		    	newUserRef.set({ 'LatLng': null });
		    }, 300000);
		});
	});

	userPosRef.on('value', function(snapshot){
		var refLL = snapshot.val();

		$.grep(Object.keys(refLL), function (k) {
		    var x = refLL[k],
		        lat = x.LatLng[0],
		        lng = x.LatLng[1];
		    var newLatLng = new L.LatLng(lat, lng);
		    L.marker([lat, lng], {icon: showUserLocation}).addTo(map);
		});
		// console.log('Lat: ' + lat + 'Lng: ' + lng)
	});


});