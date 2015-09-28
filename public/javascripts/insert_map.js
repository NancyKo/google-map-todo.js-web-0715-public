function insertMap(latitude, longitude) {
  // code here
  function initialize() {
  var mapCanvas = document.getElementById('map');
  var myOptions = {
    center: new google.maps.LatLng(latitude,longitude),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}
  google.maps.event.addDomListener(window, 'load', initialize);
}