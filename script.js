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
  $.getJSON("https://api.weatherbit.io/v2.0/current?city=Detroit,MI&units=I&key=94e389333f9a48ffba944ba55675cb55",data => {
    console.log(data);
  });
