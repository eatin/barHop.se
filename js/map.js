    var map = L.map('map').setView([59.314838, 18.069763], 14);
    var userLocation = L.divIcon({className: 'you',iconSize: [7, 7]});
    var user = L.marker([0, 0], {icon: userLocation}).addTo(map);

    L.mapbox.tileLayer('http://a.tiles.mapbox.com/v3/bjorsberg.map-nvs8mi3e.json', {
        maxZoom: 19
    }).addTo(map);

    navigator.geolocation.watchPosition(function(data) {
        var lat = data['coords']['latitude'];
        var lng = data['coords']['longitude'];
        var newLatLng = new L.LatLng(lat, lng);

        map.setView(new L.LatLng(lat, lng), 16);
        
        user.setLatLng(newLatLng);
    });