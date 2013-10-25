$(function(){

	// HIDING THE LEAFLET TAG IN BOTTOM RIGHT CORNER
	$('.leaflet-bottom.leaflet-right').hide();

	// RANDOM ROUTES
	$('.routeMePlz').click(function(){
		var go2barLocation = L.divIcon({className: 'bar2go2',iconSize: [7, 7]});
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
		console.log($(this).parent().children('ul'))
	});

});


























