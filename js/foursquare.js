$.getJSON( "https://api.foursquare.com/v2/lists/5257bc54498e08c238c10737?client_id=TBBQCOJODYFMHOV1HSRJSFH4AZI2MV2H1IGDWJTB30J1LYGZ&client_secret=SNOY0AJ312VC2TH5HHSRUEYYRSJXMCFEKU521FIP4K5UC5Y5&v=20120530", function( data ) {

    var items = data.response.list.listItems.items,
        numItems = data.response.list.listItems.count;
    var markers = L.markerClusterGroup({
        showCoverageOnHover : false
    });
    for ( var i = 0; i < numItems; i++ ) {
        var item = items[i].venue.location;

        var venName = items[i].venue.name,
            re = new RegExp(' ', 'g');
            venUrlName = venName.replace(re, '-'),
            venUrlName = venUrlName.toLowerCase(),
            venID = items[i].venue.id,
            venCat = items[i].venue.categories[0].name,
            linkUrl = 'https://foursquare.com/v/' + venUrlName + '/' + venID,
            venLocation = '<div class="lat">' + lat + '</div><div class="lng">' + lng + '</div>';

        var lat = item.lat,
            lng = item.lng;    

        var ourMarker = L.icon({
            iconUrl: 'img/marker2.png',
            shadowUrl: 'img/blur.png',

            iconSize:     [25, 42], // size of the icon
            shadowSize:   [41, 32], // size of the shadow
            iconAnchor:   [12, 40], // point of the icon which will correspond to marker's location
            shadowAnchor: [13, 30],  // the same for the shadow
            popupAnchor:  [0, -45], // point from which the popup should open relative to the iconAnchor
            autoPanPadding: [40, 40]
        });

        var clickedMarker = L.icon({
            iconUrl: 'img/marker.png',
            shadowUrl: 'img/blur.png',

            iconSize:     [24, 40], // size of the icon
            shadowSize:   [41, 32], // size of the shadow
            iconAnchor:   [12, 40], // point of the icon which will correspond to marker's location
            shadowAnchor: [13, 30],  // the same for the shadow
            popupAnchor:  [0, -45], // point from which the popup should open relative to the iconAnchor
            autoPanPadding: [40, 40]
        });
     
        var marker = L.marker([lat, lng], {icon: ourMarker})
            .bindPopup('<strong><a href="' + linkUrl + '" target="_blank">' + venName + '</a></strong><br/>' + venCat + '<div class="venueLocation">' + venLocation + '</div>')
            .on('click', changeMarker);
        markers.addLayer(marker);
    }
        
        var allP = [];


        function changeMarker(ikon) {
            if (ikon.target._icon.src == "file://localhost/Users/nathalie/Documents/Code/barHop.se%20NEW/img/marker2.png") {
                ikon.target.setIcon(clickedMarker);
                allP.push(ikon.latlng.lat);
                allP.push(ikon.latlng.lng);

            } else {
                ikon.target.setIcon(ourMarker);
            }
                console.log('alla punkter: ' + allP);
        }
        map.addLayer(markers);

        $('#createRoute').click(function(){
            var startP = allP[0] + ',' + allP[1],
                endP = allP[allP.length - 2] + ',' + allP[allP.length - 1],
                transitP = allP.splice(2, allP.length - 4);

                console.log('Start punkt: ' + startP);
                console.log('Slut punkt: ' + endP);
                console.log('Transit punkter: ' + transitP);
        })

        

});
