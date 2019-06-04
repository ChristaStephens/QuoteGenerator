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
   /*
    allows the icon to show in the dom, using the icon
    tag and showing where the source is coming from
     */
    $('.icon').attr('src',icon);

    //string method changes unicode to characters
    //math.floor shows number without decimals
    var temp = Math.floor(data.main.temp);
    $('.temp').append(temp + String.fromCharCode(8457));

    var weather = data.weather[0].main;
    $('.weather').append(weather);
  });
