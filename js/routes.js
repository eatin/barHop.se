    // RUTT 1 
    // Från
    start1 = new L.Marker(new L.latLng([ 59.32316219230917, 18.071769529190988 ]));
    start1 = start1.getLatLng().lat + ',' + start1.getLatLng().lng;
    
    // Till
    stop1 = new L.Marker(new L.latLng([ 59.3244, 18.0671 ]));
    stop1 = stop1.getLatLng().lat + ',' + stop1.getLatLng().lng;
    
    // Förbi
    pass11 = new L.Marker(new L.latLng([ 59.316928, 18.063989 ]));
    pass11 = pass11.getLatLng().lat + ',' + pass11.getLatLng().lng;
    
    pass12 = new L.Marker(new L.latLng([ 59.314591, 18.031677 ]));
    pass12 = pass12.getLatLng().lat + ',' + pass12.getLatLng().lng;

    var route1 = start1 + ',[' + pass11 + ',' + pass12 + '],' + stop1,
        routeMarker1 =
            {
                route: 'http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + route1 + '/foot.js?callback=getRoute',
                markers: start1 + ',' + pass11 + ',' + pass12 + ',' + stop1
            }


    // RUTT 2 
    start2 = new L.Marker(new L.latLng([ 59.32503108743119, 18.073840176745087 ]));
    start2 = start2.getLatLng().lat + ',' + start2.getLatLng().lng;
    
    // Till
    stop2 = new L.Marker(new L.latLng([ 59.31549299838062, 18.07367798726091 ]));
    stop2 = stop2.getLatLng().lat + ',' + stop2.getLatLng().lng;
    
    // Förbi
    pass21 = new L.Marker(new L.latLng([ 59.316814885686924, 18.07181400013834 ]));
    pass21 = pass21.getLatLng().lat + ',' + pass21.getLatLng().lng;
    
    pass22 = new L.Marker(new L.latLng([ 59.31850550310536, 18.05919921204924 ]));
    pass22 = pass22.getLatLng().lat + ',' + pass22.getLatLng().lng;

    var route2 = start2 + ',[' + pass21 + ',' + pass22 + '],' + stop2,
        routeMarker2 =
            {
                route: 'http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + route2 + '/foot.js?callback=getRoute',
                markers: start2 + ',' + pass21 + ',' + pass22 + ',' + stop2
            }


    // RUTT 3  
    start3 = new L.Marker(new L.latLng([ 59.33432762231983, 18.07098627090454 ]));
    start3 = start3.getLatLng().lat + ',' + start3.getLatLng().lng;
    
    // Till
    stop3 = new L.Marker(new L.latLng([ 59.333692864020875, 18.075374364852905 ]));
    stop3 = stop3.getLatLng().lat + ',' + stop3.getLatLng().lng;
    
    // Förbi
    pass31 = new L.Marker(new L.latLng([ 59.335121, 18.073355 ]));
    pass31 = pass31.getLatLng().lat + ',' + pass31.getLatLng().lng;
    
    pass32 = new L.Marker(new L.latLng([ 59.33583813078362, 18.07326943122913 ]));
    pass32 = pass32.getLatLng().lat + ',' + pass32.getLatLng().lng;

    var route3 = start3 + ',[' + pass31 + ',' + pass32 + '],' + stop3,
        routeMarker3 =
            {
                route: 'http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + route3 + '/foot.js?callback=getRoute',
                markers: start3 + ',' + pass31 + ',' + pass32 + ',' + stop3
            }


    //RUTT 4 
    start4 = new L.Marker(new L.latLng([ 59.336713331936764, 18.073410987854004 ]));
    start4 = start4.getLatLng().lat + ',' + start4.getLatLng().lng;
    
    // Till
    stop4 = new L.Marker(new L.latLng([ 59.33762787681551, 18.069743326918807 ]));
    stop4 = stop4.getLatLng().lat + ',' + stop4.getLatLng().lng;
    
    // Förbi
    pass41 = new L.Marker(new L.latLng([ 59.33657418032723, 18.07094377660672 ]));
    pass41 = pass41.getLatLng().lat + ',' + pass41.getLatLng().lng;
    
    pass42 = new L.Marker(new L.latLng([ 59.3357284262542, 18.07122230529785 ]));
    pass42 = pass42.getLatLng().lat + ',' + pass42.getLatLng().lng;

    var route4 = start4 + ',[' + pass41 + ',' + pass42 + '],' + stop4,
        routeMarker4 =
            {
                route: 'http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + route4 + '/foot.js?callback=getRoute',
                markers: start4 + ',' + pass41 + ',' + pass42 + ',' + stop4
            }


    //RUTT 5
    start5 = new L.Marker(new L.latLng([ 59.34172616563993, 18.045729480485676 ]));
    start5 = start5.getLatLng().lat + ',' + start5.getLatLng().lng;
    
    // Till
    stop5 = new L.Marker(new L.latLng([ 59.341879, 18.0467412 ]));
    stop5 = stop5.getLatLng().lat + ',' + stop5.getLatLng().lng;
    
    // Förbi
    pass51 = new L.Marker(new L.latLng([ 59.340295, 18.0388213 ]));
    pass51 = pass51.getLatLng().lat + ',' + pass51.getLatLng().lng;
    
    pass52 = new L.Marker(new L.latLng([ 59.34592628861429, 18.047490119934082 ]));
    pass52 = pass52.getLatLng().lat + ',' + pass52.getLatLng().lng;

    var route5 = start5 + ',[' + pass51 + ',' + pass52 + '],' + stop5,
        routeMarker5 =
            {
                route: 'http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + route5 + '/foot.js?callback=getRoute',
                markers: start5 + ',' + pass51 + ',' + pass52 + ',' + stop5
            }


    //RUTT 6
    start6 = new L.Marker(new L.latLng([ 59.33871041413502, 18.05702805519104 ]));
    start6 = start6.getLatLng().lat + ',' + start6.getLatLng().lng;
    
    // Till
    stop6 = new L.Marker(new L.latLng([ 59.33762787681551, 18.069743326918807 ]));
    stop6 = stop6.getLatLng().lat + ',' + stop6.getLatLng().lng;
    
    // Förbi
    pass61 = new L.Marker(new L.latLng([ 59.34583991874391, 18.058699929368707 ]));
    pass61 = pass61.getLatLng().lat + ',' + pass61.getLatLng().lng;

    var route6 = start6 + ',[' + pass61 + '],' + stop6,
        routeMarker6 =
            {
                route: 'http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + route6 + '/foot.js?callback=getRoute',
                markers: start6 + ',' + pass61 + ',' + stop6
            }


    //RUTT 7
    start7 = new L.Marker(new L.latLng([ 59.313622, 18.07942 ]));
    start7 = start7.getLatLng().lat + ',' + start7.getLatLng().lng;
    
    // Till
    stop7 = new L.Marker(new L.latLng([ 59.30424436193117, 18.078537929420545 ]));
    stop7 = stop7.getLatLng().lat + ',' + stop7.getLatLng().lng;
    
    // Förbi
    pass71 = new L.Marker(new L.latLng([ 59.31257193326859, 18.081670869542997 ]));
    pass71 = pass71.getLatLng().lat + ',' + pass71.getLatLng().lng;

    var route7 = start7 + ',[' + pass71 + '],' + stop7,
        routeMarker7 =
            {
                route: 'http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + route7 + '/foot.js?callback=getRoute',
                markers: start7 + ',' + pass71 + ',' + stop7
            }


    //RUTT 8
    start8 = new L.Marker(new L.latLng([ 59.337069630947916, 18.064884476905686 ]));
    start8 = start8.getLatLng().lat + ',' + start8.getLatLng().lng;
    
    // Till
    stop8 = new L.Marker(new L.latLng([ 59.33644795738273, 18.072139620780945 ]));
    stop8 = stop8.getLatLng().lat + ',' + stop8.getLatLng().lng;
    
    // Förbi
    pass81 = new L.Marker(new L.latLng([ 59.332467, 18.074047 ]));
    pass81 = pass81.getLatLng().lat + ',' + pass81.getLatLng().lng;

    var route8 = start8 + ',[' + pass81 + '],' + stop8,
        routeMarker8 =
            {
                route: 'http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + route8 + '/foot.js?callback=getRoute',
                markers: start8 + ',' + pass81 + ',' + stop8
            }


    //RUTT 9
    start9 = new L.Marker(new L.latLng([ 59.32637313463698, 18.043949604034424 ]));
    start9 = start9.getLatLng().lat + ',' + start9.getLatLng().lng;
    
    // Till
    stop9 = new L.Marker(new L.latLng([ 59.3296948818626, 18.043499479371512 ]));
    stop9 = stop9.getLatLng().lat + ',' + stop9.getLatLng().lng;
    
    // Förbi
    pass91 = new L.Marker(new L.latLng([ 59.339572887632585, 18.03388217871556 ]));
    pass91 = pass91.getLatLng().lat + ',' + pass91.getLatLng().lng;

    var route9 = start9 + ',[' + pass91 + '],' + stop9,
        routeMarker9 =
            {
                route: 'http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + route9 + '/foot.js?callback=getRoute',
                markers: start9 + ',' + pass91 + ',' + stop9
            }


    //RUTT 10
    start10 = new L.Marker(new L.latLng([ 59.3296948818626, 18.043499479371512 ]));
    start10 = start10.getLatLng().lat + ',' + start10.getLatLng().lng;
    
    // Till
    stop10 = new L.Marker(new L.latLng([ 59.344695935243315, 18.058304483237528 ]));
    stop10 = stop10.getLatLng().lat + ',' + stop10.getLatLng().lng;
    
    // Förbi
    pass101 = new L.Marker(new L.latLng([ 59.34295158818096, 18.04903822268627 ]));
    pass101 = pass101.getLatLng().lat + ',' + pass101.getLatLng().lng;

    var route10 = start10 + ',[' + pass101 + '],' + stop10,
        routeMarker10 =
            {
                route: 'http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + route10 + '/foot.js?callback=getRoute',
                markers: start10 + ',' + pass101 + ',' + stop10
            }


    var routes = 
        [
            routeMarker1,
            routeMarker2,
            routeMarker3,
            routeMarker4,
            routeMarker5,
            routeMarker6,
            routeMarker7,
            routeMarker8,
            routeMarker9,
            
        ]   