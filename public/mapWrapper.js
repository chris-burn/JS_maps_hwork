// var MapWrapper = function(){
//   var container = document.getElementById("main-map");
//   // two parameters to Map, container and settings
//   this.googleMap = new google.maps.Map(container, {
//     center: {
//       lat: 40.712784,
//       lng: -74.005941
//     },
//     zoom: 10
//   })
// }

var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
  // add added markers to array
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords){
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  marker.setAnimation(google.maps.Animation.DROP);
  this.markers.push(marker);
  
  marker.addListener('click', function(event) {
    var infoWin = new google.maps.InfoWindow({
      content: "Awesome! You have clicked @ Lat: " + event.latLng.lat() + " Long: " + event.latLng.lng()
    });
    infoWin.open(this.googleMap, marker);  
  }.bind(this));
};


MapWrapper.prototype.addClickEvent = function() {
  // google has it's own click functionality, JS is more recent.  3 params (what, when, how)
  // callback function?
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
    var coords = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
    this.addMarker(coords); 
    // need to bind as this is looking globally, outside function?!
  }.bind(this));

};

MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  })
};

MapWrapper.prototype.holidayTime = function(){
  var coords = {
    lat: 9.560837,
    lng: 100.022605
  }
  this.addMarker(coords);
  this.googleMap.setCenter(coords);
};

MapWrapper.prototype.locationSeek = function(){
  navigator.geolocation.getCurrentPosition(function(position) {
    var coords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
  });
  this.addMarker(coords);
  this.googleMap.setCenter(coords);
};




