//Firebase references
var barhopRef = new Firebase('https://barhop.firebase.com'); 

var myRoutesRef = barhopRef.child('barhop/myRoutes');
var routeRef = myRoutesRef.child('myRoutes/routeName');
var createdRouteRef = routeRef.child('routeName/route');

// Generate a reference to a new location with push
var new routeRef = myRoutesRef.push();

// Set some data to the generated location
new routeRef.set('http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + startP + ',[' + transitP + '],' + endP + '/foot.js?callback=getRoute');

//Reading List data
var myRoutesRef = new Firebase('https://barhop.firebaseIO.com/myRoutes');
myRoutesRef.on('child_added', function(snapshot) {
  var msgData = snapshot.val();
  console.log("Route Added")
});

//Callback
dataRef.set(function(error)) {
  if (error) {
    alert('Route could not be saved.' + error);
  } else {
    alert('Route saved successfully.');
  }
});

	
	









