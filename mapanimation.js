
const busStops = [
    [76.95051, 11.01557],
    [77.13439732821607,11.028722050850808],
];

// add own access token
mapboxgl.accessToken = 'pk.eyJ1IjoidGhpcnVuYXZ1YWthcmFzYW4iLCJhIjoiY2t4ZTV2cWR5MW9pdjJ2a3Qxazg3aWQwbSJ9.U9XpbDEbBblFxgoIzpNYkQ';

// This is the map instance
let map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/outdoors-v11',
center: [76.95051, 11.01557],
zoom: 12
});

//add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker({"color": "#b40219"})
.setLngLat([76.95051, 11.01557])
.addTo(map);

//counter here represents the index of the current bus stop
let counter = 0;
function move() {
setTimeout(() => {
  if(counter >= busStops.length) return;
  marker.setLngLat(busStops[counter]);
  counter++;
  move();
}, 1000);
}