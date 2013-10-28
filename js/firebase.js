//Firebase references
var myDataRef = new Firebase('https://barhop.firebase.com/myRoutes'); 

var myRoutesRef = barhopRef.child('barhop/myRoutes');
var routeNameRef = myRoutesRef.child('myRoutes/routeName');
var createdRouteRef = routeNameRef.child('routeName/route');

// Generate a reference to a new location with push
// var routeNameRef = myRoutesRef.push();

//Local storage
var routeName = localStorage.getItem('routeName');
	if (routeName) {
		//do somethong
	} else {
		//do something
		localStorage.setItem("routeName", routeName);
		myRoutesRef = myDataRef.push({name: routeName});
		localStorage.setItem("routeName", myRoutes.routeName());		
	}

//Generate name of route
$('#routeName').keypress(function (e) {
	if(e.keycode == 13) {
		var routename = $('#routename').val();
	} 
	else {
		var myDataRef = new Firebase ('https://barhop.firebase.com/myRoutes');
		myDataRef.push({ routeName: routeName });

		localStorage.setItem('routeName', routename);
	}
	var routeName = localStorage.getItem('routeName');
});

// Set some data to the generated location
$('#createRoute').click(function(){
	new myRoutesRef.set('http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + startP + ',[' + transitP + '],' + endP + '/foot.js?callback=getRoute');	
});

//Reading List data
//var myRoutesRef = new Firebase('https://barhop.firebaseIO.com/myRoutes');
//myRoutesRef.on('child_added', function(snapshot) {
  //var msgData = snapshot.val();
  //console.log("Route Added")
//});

//Callback
dataRef.set(function(error) {
  if (error) {
    alert('Route could not be saved.' + error);
  } else {
    alert('Route saved successfully.');
  }
});









