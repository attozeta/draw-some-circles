function init() {
    var map = L.map('map').setView([47, 11], 5);

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i875mjb7'
    }).addTo(map);

    function onMapClick(e) {
        var lat = e.latlng.lat, lng = e.latlng.lng;
        console.log('(lat,lng) = (' + lat + ',' + lng + ')');
        var circle = L.circle([lat, lng], 100000, {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5
        }).addTo(map);
    }

    map.on('click', onMapClick);
}

