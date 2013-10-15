$.getJSON( "https://api.foursquare.com/v2/lists/5257bc54498e08c238c10737?client_id=TBBQCOJODYFMHOV1HSRJSFH4AZI2MV2H1IGDWJTB30J1LYGZ&client_secret=SNOY0AJ312VC2TH5HHSRUEYYRSJXMCFEKU521FIP4K5UC5Y5&v=20120530", function( data ) {

    var items = data.response.list.listItems.items,
        numItems = data.response.list.listItems.count;

    for ( var i = 0; i < numItems; i++ ) {
        var item = items[i].venue.location;

        var lat = item.lat,
            lng = item.lng;

        var marker = L.marker([lat, lng]).addTo(map);
    }

    // $.each( items, function() {
    //     var lat = items.venue.location.lat,
    //         lng = items.venue.location.lng;
            
    //     console.log(lat + lng);
    //     // items.push( "<li id='" + key + "'>" + val + "</li>" );
    // });

    // $( "<ul/>", {
    //     "class": "my-new-list",
    //     html: items.join( "" )
    // }).appendTo( "body" );
});