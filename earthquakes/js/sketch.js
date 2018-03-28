var token = "pk.eyJ1IjoibWljaGFlbGZtbmsiLCJhIjoiY2pmMWlkYTBkMGJydDJxcTdianF2eDBuaiJ9.Rg0JH-QhkcHLDlCldzNmZw"
var zoom = 1
var mapLoadingUrl = "https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,"+ zoom +",0,0/1024x512?access_token="+token
var earthquakes;


var mapImg
function preload(){
    mapImg = loadImage(mapLoadingUrl)
    earthquakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.csv")



}

function mercX(lon) {
    lon = radians(lon);
    var a = (256 / PI) * pow(2, zoom);
    var b = lon + PI;
    return a * b;
  }
  
  function mercY(lat) {
    lat = radians(lat);
    var a = (256 / PI) * pow(2, zoom);
    var b = tan(PI / 4 + lat / 2);
    var c = PI - log(b);
    return a * c;
  }

function setup() {
    createCanvas(1024, 512)
    translate(width/2, height/2)
    imageMode(CENTER)
    image(mapImg, 0, 0)
    var cx = mercX(0)
    var cy = mercY(0)
    var magMax = sqrt(pow(10,10))

    for(let i = 0; i<earthquakes.length; i++){
        var data = earthquakes[i].split(/,/)

        var mag = sqrt(pow(10, data[4]))

        var diameter = map(mag, 0, magMax, 2, 300)

        var x = mercX(data[2]) - cx
        var y = mercY(data[1]) - cy
        stroke(255, 0, 255)
        fill(55, 0, 255, 200)
        ellipse(x,y, diameter, diameter)


    }




    
}