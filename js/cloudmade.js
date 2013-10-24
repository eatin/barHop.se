    var fromMarker, toMarker, transitMarker;

    function addScript(url) {
        var script = document.createElement('script');
        script.type="text/javascript";
        script.src=url;
        document.getElementsByTagName('head') [0].appendChild(script);
    }

    var pointA = new L.LatLng(28.635308, 77.22496),
        pointB = new L.LatLng(28.984461, 77.70641);
    var route = new L.Polyline([pointA, pointB], {
        weight: 4,
        opacity: 0.9,
        smoothFactor: 1,
        color: '#ffce39'
    });

    function getRoute(response) {
        var point, points = [];
        for (var i=0; i<response.route_geometry.length; i++) {
            point = new L.LatLng(response.route_geometry[i][0] , response.route_geometry[i][1]);
            points.push(point);
        }

        route.setLatLngs(points).addTo(map).bringToFront();

        var bounds = route.getBounds();
        map.fitBounds(bounds);
    }