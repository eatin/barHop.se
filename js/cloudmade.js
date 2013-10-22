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

    addScript('http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + route1 + '/foot.js?callback=getRoute');
    addScript('http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + route2 + '/foot.js?callback=getRoute');


