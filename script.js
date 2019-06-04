// var currentTime = new Date();
// moment(new Date).format("MMMM YYYY");


var date1 = new Date();

function quoteRefresh() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

/*
  requesting JSON data created by WeatherBit. Arrow function
  is used in place of 'function(data)'
   */
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=detroit&units=imperial&appid=6ccdde3b5bf6715b81441f3f37bce188",data => {
    console.log(data);
    var icon ="http://openweathermap.org/img/w/" + data.weather[0].icon +".png";

    console.log(icon);
  });
