// require doesnt work as working in browser.  require only works with Node
var initialise = function(){
  var center = { lat: 55.857103, lng: -4.243951 };
  var zoom = 18;
  var mapDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(mapDiv, center, zoom);

  mainMap.addMarker(center);

  mainMap.addClickEvent();

  var bounceButton = document.querySelector("#bounce-button");
  // takes in name of event and function. Do not add brackets as will call call method straightaway. NEED TO BIND TO THE MAP ITSELF
  bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var holidayButton = document.querySelector("#holiday-button");
  holidayButton.addEventListener("click", mainMap.holidayTime.bind(mainMap));

  var locationButton = document.querySelector("#location-button");
  locationButton.addEventListener("click", mainMap.locationSeek.bind(mainMap));

}

// give eventListener a name and function
window.addEventListener("load", initialise);