function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:16,
};

var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);

}