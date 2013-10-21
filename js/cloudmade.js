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
        route= new L.Polyline(points, {
            weight: 3,
            opacity: 0.5,
            smoothFactor: 1
        }).addTo(map);
        route.bringToFront();
    }

    fromMarker = new L.Marker(new L.latLng([ 59.312589, 18.075535 ])).addTo(map);
    toMarker = new L.Marker(new L.latLng([ 59.31178828975938, 18.074303013686887 ])).addTo(map);
    transitMarker = new L.Marker(new L.latLng([ 59.313622, 18.07942 ])).addTo(map);

    startPoint = fromMarker.getLatLng().lat + ',' + fromMarker.getLatLng().lng;
    endPoint = toMarker.getLatLng().lat + ',' + toMarker.getLatLng().lng;
    transitPoint = '[' + transitMarker.getLatLng().lat + ',' + transitMarker.getLatLng().lng + ']';

    addScript('http://routes.cloudmade.com/0932569191ae4fe7b76faa846f0b860c/api/0.3/' + startPoint + ',' + transitPoint + ',' + endPoint + '/foot.js?callback=getRoute');
