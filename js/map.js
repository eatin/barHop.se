    var map = L.map('map').setView([59.314838, 18.069763], 14);

        L.mapbox.tileLayer('http://a.tiles.mapbox.com/v3/bjorsberg.map-nvs8mi3e.json', {
            maxZoom: 18
        }).addTo(map);

    navigator.geolocation.getCurrentPosition(function(data) {
        var lat = data['coords']['latitude'];
        var lng = data['coords']['longitude'];
        
        map.setView(new L.LatLng(lat, lng), 16);
    });