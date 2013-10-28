$(function(){

	// HIDING THE LEAFLET TAG IN BOTTOM RIGHT CORNER
	$('.leaflet-bottom.leaflet-right').hide();

	// RANDOM ROUTES
		var go2barLocation = L.divIcon({className: 'bar2go2',iconSize: [7, 7]});
	$('.routeMePlz').click(function(){
		var random = Math.floor((Math.random()*10)+1),
			nr = $(this).attr('id');

		if ($(this).hasClass('randomBro')){
			var str = routes[random].markers;
		} else {
			var str = routes[nr].markers;
		}

		var temp = [],
			temp = str.split(',');

		$('.bar2go2').hide();
		var i,j,temparray,chunk = 2;
		for (i=0,j=temp.length; i<j; i+=chunk) {
			var	goHere = temp.slice(i,i+chunk),
				goHereLat = goHere[0],
				goHereLng = goHere[1];

			var go2 = L.marker([goHereLat, goHereLng], {icon: go2barLocation}).addTo(map);
		}

		if ($(this).hasClass('randomBro')){
    		addScript(routes[random].route);
		} else {
			addScript(routes[nr].route);
			$('.chosenOne').removeClass('chosenOne');
			$(this).addClass('chosenOne');
		}

    	$('#map').animate({
			marginLeft: '0px'
		}, 400, 'easeInExpo');
		menuShowing = false;
	});

	// MENUE
	var menuShowing = false;
	$('#hamburger').click(function(){
		var winW = $(window).width(),
			slideL = winW - 66;
		if (!menuShowing) {
			menuShowing = true;
			$('#map').animate({
				marginLeft: slideL + 'px'
			}, 400, 'easeOutExpo');
		} else if (menuShowing) {
			$('#map').animate({
				marginLeft: '0px'
			}, 400, 'easeInExpo');
			menuShowing = false;
		}
	});

		// SHOW UL
	$('.routes h1').click(function(){
		$('.routes ul').slideUp( 500, 'easeOutExpo');
		$(this).parent().children('ul').slideToggle( 500, 'easeOutExpo');
	});


	// CREATE YOUR OWN ROUTE

		// Initialize create-your-own-route-mode
	$('#createRoute').click(function(){
		enableRouteMakeing = true;

		$('#map').animate({marginLeft: '0px'}, 400, 'easeInExpo');
		$('#saveBtn').show();
		menuShowing = false;
	});

		// Show modal on #saveBtn 
	var modalShown = false;
	$('#saveBtn').click(function(){
		if (!modalShown) {
			modalShown = true;
			$('.modalLayer').fadeIn(300, 'easeInExpo',function(){
				$('#saveModal').animate({marginTop: '50px'},400, 'easeInOutExpo');
			});
			$(this).text('Cancel');
		} else {
			modalShown = false;
			$('.modalLayer').fadeOut(500, 'easeOutExpo');
			$('#saveModal').animate({marginTop: '150px'},600, 'easeOutExpo', function(){
				$(this).animate({marginTop: '-180px'});
			});
			$(this).text('Save route');
		}
	});

		// Push route to firebase
	var routesRef = new Firebase ('https://barhop.firebaseio.com/myRoutes');

	$('#pushRoute').click(function(e){
		e.preventDefault();
		var test = allP;
		
		// firebase variables
		var	routeName = $('input#routeName').val(),
			routeAuthor = $('input#routeAuthor').val();

		// Adding waypoints
		var temp = [],
			temp = allP;
		$('.bar2go2').hide();
		// Looping thorugh all coordinates
		var i,j,goHere,chunk = 2;
		for (i=0,j=temp.length; i<j; i+=chunk) {
			goHere = temp.slice(i,i+chunk);
			var goHereLat = goHere[0],
				goHereLng = goHere[1];

			var go2 = L.marker([goHereLat, goHereLng], {icon: go2barLocation}).addTo(map);
		}

		// getting the route path
		var startP = allP[0] + ',' + allP[1],
            endP = allP[allP.length - 2] + ',' + allP[allP.length - 1],
            transitP = allP.splice(2, allP.length - 4),
            routePath = 'http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + startP + ',[' + transitP + '],' + endP + '/foot.js?callback=getRoute';

        // Push to fire base and print out the route
		routesRef.push({"Route name": routeName, "Author": routeAuthor, "Route path": routePath, "bars": [ startP + transitP + endP ]});
		addScript(routePath);

		// local storage
		// localStorage.setItem( 'route' + locI, routeName );
		localStorage.setItem( routeName, routePath );

		// append to menu
		$('.savedRoutes').append('<li>' + routeName + '</li>');

		// Do shit to get rich (or die trying bitch!!)
		$('.modalLayer').fadeOut(500, 'easeOutExpo');
		$('#saveModal').animate({marginTop: '150px'},600, 'easeOutExpo', function(){
			$('#saveModal').animate({marginTop: '-180px'});
		});
		$('#saveBtn').text('Save route');
		modalShown = false;
	});

		// Get stored routes
	for (var key in localStorage){
		console.log(key)
		$('ul.savedRoutes').append('<li class="userGen">' + key + '</li>');
	}

		// Allow user created routes
	$('li.userGen').click(function(){
		var keyToHeart = $(this).text(),
			userRoutePath = localStorage.getItem(keyToHeart);

		addScript(userRoutePath);

		// Adding waypoints
		var temp = [],
			temp = allP;
		$('.bar2go2').hide();
		// Looping thorugh all coordinates
		var i,j,goHere,chunk = 2;
		for (i=0,j=temp.length; i<j; i+=chunk) {
			goHere = temp.slice(i,i+chunk);
			var goHereLat = goHere[0],
				goHereLng = goHere[1];

			var go2 = L.marker([goHereLat, goHereLng], {icon: go2barLocation}).addTo(map);
		}

		$('#map').animate({
			marginLeft: '0px'
		}, 400, 'easeInExpo');
		menuShowing = false;
	});


});


























