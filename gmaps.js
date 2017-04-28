function initMap() {
  var uluru = {lat: 35.967208, lng: -5.588132};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: uluru,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}