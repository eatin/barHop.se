    var fromMarker, toMarker, transitMarker;

    function addScript(url) {
        var script = document.createElement('script');
        script.type="text/javascript";
        script.src=url;
        document.getElementsByTagName('head') [0].appendChild(script);
    }

    function getRoute(response) {
        var point, route, points = [];
        for (var i=0; i<response.route_geometry.length; i++)
        {
            point = new L.LatLng(response.route_geometry[i][0] , response.route_geometry[i][1]);
            points.push(point);
        }
        route = new L.Polyline(points, {
            weight: 4,
            opacity: 0.9,
            smoothFactor: 1,
            color: '#ffce39'
        }).addTo(map);
        route.bringToFront();
    }

    


