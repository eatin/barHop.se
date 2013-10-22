    // RUTT 1 - ÖLRUTTEN
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

    var route1 = start1 + ',[' + pass11 + ',' + pass12 + '],' + stop1


    // RUTT 2 - DRINKRUTTEN
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

    var route2 = start2 + ',[' + pass21 + ',' + pass22 + '],' + stop2


    // RUTT 3 - KLUBBRUTTEN 
    start3 = new L.Marker(new L.latLng([ 59.339572887632585, 18.03388217871556 ]));
    start3 = start3.getLatLng().lat + ',' + start3.getLatLng().lng;
    
    // Till
    stop3 = new L.Marker(new L.latLng([ 59.34583991874391, 18.058699929368707 ]));
    stop3 = stop3.getLatLng().lat + ',' + stop3.getLatLng().lng;
    
    // Förbi
    pass31 = new L.Marker(new L.latLng([ 59.33762787681551, 18.069743326918807 ]));
    pass31 = pass31.getLatLng().lat + ',' + pass31.getLatLng().lng;
    
    pass32 = new L.Marker(new L.latLng([ 59.332853, 18.075158 ]));
    pass32 = pass32.getLatLng().lat + ',' + pass32.getLatLng().lng;

    var route3 = start3 + ',[' + pass31 + ',' + pass32 + '],' + stop3


    //RUTT 4 - 
    start4 = new L.Marker(new L.latLng([ 59.339572887632585, 18.03388217871556 ]));
    start4 = start4.getLatLng().lat + ',' + start4.getLatLng().lng;
    
    // Till
    stop4 = new L.Marker(new L.latLng([ 59.34583991874391, 18.058699929368707 ]));
    stop4 = stop4.getLatLng().lat + ',' + stop4.getLatLng().lng;
    
    // Förbi
    pass41 = new L.Marker(new L.latLng([ 59.33762787681551, 18.069743326918807 ]));
    pass41 = pass41.getLatLng().lat + ',' + pass41.getLatLng().lng;
    
    pass42 = new L.Marker(new L.latLng([ 59.332853, 18.075158 ]));
    pass42 = pass42.getLatLng().lat + ',' + pass42.getLatLng().lng;

    var route4 = start4 + ',[' + pass41 + ',' + pass42 + '],' + stop4