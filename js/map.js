    var map = L.map('map').setView([59.314838, 18.069763], 14);
    var userLocation = L.divIcon({className: 'you',iconSize: [7, 7]});
    var user = L.marker([0, 0], {icon: userLocation});
    var iniLat, iniLng;

    L.mapbox.tileLayer('http://a.tiles.mapbox.com/v3/jockekroon.map-ct91hlek.json', {
        maxZoom: 19
    }).addTo(map);

    navigator.geolocation.watchPosition(function(data) {
        var lat = data['coords']['latitude'];
        var lng = data['coords']['longitude'];
        var iniLat = data['coords']['latitude'];
        var iniLng = data['coords']['longitude'];
        var newLatLng = new L.LatLng(lat, lng);

        user.setLatLng(newLatLng).addTo(map);

        var noop = false;
        if (!noop == true){
            console.log('hej')
            map.setView(new L.LatLng(iniLat, iniLng), 16);
            noop = true;
            console.log(noop)
        }
        console.log(noop)
    });

    