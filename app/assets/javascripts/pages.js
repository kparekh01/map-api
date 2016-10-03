


function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 2
  });

  var location_array = [{lat: 13.400307, lng: 39.375, description: "first place" },
                        {lat:19.209029, lng:72.975311, description: "second place" },
                        {lat:-26.985724, lng:136.757813, description: "third place"},
                        {lat:-23.319715, lng:-58.480225, description: "fourth place"},
                        {lat:-29.156959, lng:22.851563, description: "fifth place"}
                        ];

  location_array.forEach(function(place) {

    console.log(place);

  var infowindow = new google.maps.InfoWindow({
    content: place.description
  });

  var marker = new google.maps.Marker({
    position: {lat: place.lat, lng: place.lng},
    map: map,
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
});
}
