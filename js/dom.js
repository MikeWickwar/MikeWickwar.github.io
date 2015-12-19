////*********this response is for brekenridge
var breckGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/937:CO:SNTL",
  // 415:CO:SNTL",
  method: "GET",
  dataType: "json"
});
////*********this response is for vail
var vailGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/842:CO:SNTL",
  method: "GET",
  dataType: "json"
});
////*********this response is for bever creek
var bcGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/1040:CO:SNTL",
  method: "GET",
  dataType: "json"
});
////*********this response is for bever creek
var abGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/505:CO:SNTL",
  method: "GET",
  dataType: "json"
});
////*********this response is for bever creek
var ksGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/505:CO:SNTL",
  method: "GET",
  dataType: "json"
});
/// api key for google AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4
var bcDGetter = $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Beaver%20Creek%20CO&units=imperial&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
var vailDGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Vail&units=imperial&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
var abDGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Arapahoe%20Basin%20CO&units=imperial&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
var ksDGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Keystone%20CO&units=imperial&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
var breckDGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Brekenridge%20CO&units=imperial&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
// real dom interaction starts here
  $('.info').css('display','none')
///page 2 listeners *********************************
$('#bc').on('click', function(){
  bcDGetter.done(function(response){
    var dTime = response.rows[0].elements[0].duration.text;
    var dist = response.rows[0].elements[0].distance.text;
    appendTraf(dTime, dist)
  });
  bcGetter.done(function(response){
    var csDepth = response["data"][4]["Change In Snow Depth (in)"]
    var sDepth = response["data"][4]["Snow Depth (in)"]
    var elevation = response["station_information"]["elevation"]
    var namey = response["station_information"]["name"]
    ///snow rate
    getSnowRate(sDepth);
    $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Beaver Creek</h2>")
    appendData(sDepth, csDepth, namey, elevation);
  });
})
$('#vl').on('click', function(){
  vailDGetter.done(function(response){
    var dTime = response.rows[0].elements[0].duration.text;
    var dist = response.rows[0].elements[0].distance.text;
    appendTraf(dTime, dist)
  });
  vailGetter.done(function(response){
    var csDepth = response["data"][4]["Change In Snow Depth (in)"]
    var sDepth = response["data"][4]["Snow Depth (in)"]
    var elevation = response["station_information"]["elevation"]
    var namey = response["station_information"]["name"]
    getSnowRate(sDepth);
    appendData(sDepth, csDepth, namey, elevation);
    $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Vail</h2>")
  });
})
$('#ab').on('click', function(){
  abDGetter.done(function(response){
    var dTime = response.rows[0].elements[0].duration.text;
    var dist = response.rows[0].elements[0].distance.text;
    appendTraf(dTime, dist)
  });
  abGetter.done(function(response){
    var csDepth = response["data"][4]["Change In Snow Depth (in)"]
    var sDepth = response["data"][4]["Snow Depth (in)"]
    var elevation = response["station_information"]["elevation"]
    var namey = response["station_information"]["name"]
    ///snow rate
    getSnowRate(sDepth);
    appendData(sDepth, csDepth, namey, elevation);
    $('#t1').html("<div class='box info t1'><h2 class='h3er'id='he2'>&#x2744 Arapahoe Basin</h2>")
  });
})
$('#ks').on('click', function(){
  ksDGetter.done(function(response){
    var dTime = response.rows[0].elements[0].duration.text;
    var dist = response.rows[0].elements[0].distance.text;
    appendTraf(dTime, dist)
  });
  ksGetter.done(function(response){
    var csDepth = response["data"][4]["Change In Snow Depth (in)"]
    var sDepth = response["data"][4]["Snow Depth (in)"]
    var elevation = response["station_information"]["elevation"]
    var namey = response["station_information"]["name"]
    getSnowRate(sDepth);
    appendData(sDepth, csDepth, namey, elevation);
    $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Keystone</h2>")
  });
});
$('#br').on('click', function(){
  breckDGetter.done(function(response){
    var dTime = response.rows[0].elements[0].duration.text;
    var dist = response.rows[0].elements[0].distance.text;
    appendTraf(dTime, dist)
  });
  breckGetter.done(function(response){
    var csDepth = response["data"][4]["Change In Snow Depth (in)"]
    var sDepth = response["data"][4]["Snow Depth (in)"]
    var elevation = response["station_information"]["elevation"]
    var namey = response["station_information"]["name"]
    getSnowRate(sDepth);
    appendData(sDepth, csDepth, namey, elevation)
    $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Breckenridge</h2>")
  });
});
//************** best mountain***********8
$('#motdBtn').click(function(){
  snI = 0;
  bstSn = 0;
    bcGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if(sDepth >= bstSn){
        snI = "bc";
        bstSn = sDepth;
      }
    })
    vailGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if(sDepth >= bstSn){
        snI = "v";
        bstSn = sDepth;
      }
    })
    ksGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if(sDepth >= bstSn){
        snI = "ks";
        bstSn = sDepth;
      }
    })
    breckGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if(sDepth >= bstSn){
        snI = "brek";
        bstSn = sDepth;
      }
    })
    abGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if(sDepth >= bstSn){
        snI = "ab";
        bstSn = sDepth;
      }
    })
    if (snI === 'ks') {
      ksGetter.done(function(response){
        var sDepth = response["data"][4]["Snow Depth (in)"];
        var csDepth = response["data"][4]["Change In Snow Depth (in)"];
        var elevation = response["station_information"]["elevation"];
        var namey = response["station_information"]["name"];
        $('.t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Keystone</h2>")
        appendData(sDepth, csDepth, namey, elevation)
    })
  }
    if (snI === 'ab') {
      abGetter.done(function(response){
        $(".togglers").hide();
        var sDepth = response["data"][4]["Snow Depth (in)"];
        var csDepth = response["data"][4]["Change In Snow Depth (in)"];
        var elevation = response["station_information"]["elevation"];
        var namey = response["station_information"]["name"];
        $('#t1').html("<div class='box info t1' id='he'><h1>&#x2744 Arapahoe Basin</h2>")
        appendData(sDepth, csDepth, namey, elevation)
    })
  }
    if (snI === 'bc') {
      bcGetter.done(function(response){
        var sDepth = response["data"][4]["Snow Depth (in)"];
        var csDepth = response["data"][4]["Change In Snow Depth (in)"];
        var elevation = response["station_information"]["elevation"];
        var namey = response["station_information"]["name"];
        $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Beaver Creek</h2>")
        appendData(sDepth, csDepth, namey, elevation)
    })
  }
    if (snI === 'vail') {
      vailGetter.done(function(response){
        var sDepth = response["data"][4]["Snow Depth (in)"];
        var csDepth = response["data"][4]["Change In Snow Depth (in)"];
        var elevation = response["station_information"]["elevation"];
        var namey = response["station_information"]["name"];
        $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Vail</h2>")
        appendData(sDepth, csDepth, namey, elevation)
    })
  }
    if (snI === 'brek') {
      breckGetter.done(function(response){
        var sDepth = response["data"][4]["Snow Depth (in)"];
        var csDepth = response["data"][4]["Change In Snow Depth (in)"];
        var elevation = response["station_information"]["elevation"];
        var namey = response["station_information"]["name"];
        $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Breckenridge</h2>")
        appendData(sDepth, csDepth, namey, elevation)
    })
  }
})
function getSnowRate(sDepth){
  if (sDepth>50) {
    $("#snow").css("animation", "snow 2s linear infinite")
  }else if(sDepth>30){
    $("#snow").css("animation", "snow 3s linear infinite")
  }else if (sDepth<30) {
    $("#snow").css("animation", "snow 4s linear infinite")
  }else if(sDepth<26) {
    $("#snow").css("animation", "snow 10s linear infinite")
  }
}
//////////append data
function appendTraf(dTime, dist){
  $(".togglers").hide();
  $("#t6").html("<div class='box info t1'><h3 id='t6'>&#x2744 Average Drive Time: "+dTime+"</h3>")
  $("#t7").html("<div class='box info t1'><h3 id='t7'>&#x2744 Distance from Denver: "+dist+"</h3>")
}
function appendData(sDepth, csDepth, namey, elevation){
  $('#t2').html("<div class='box info t1'><h3 class='h3er' id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
  $('#t3').html("<div class='box info t1'><h3 class='h3er' id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
  $('#t5').html("<div class='box info t1'><h3 class='h3er' id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
  $('#t4').html("<div class='box info t1'><h3 class='h3er' id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
  $('#t1').toggle(800,"swing");
  $('#t2').toggle(1000,"swing");
  $('#t3').toggle(1200,"swing");
  $('#t4').toggle(1400,"swing");
  $('#t5').toggle(1600,"swing");
  $('#t6').toggle(1800,"swing");
  $('#t7').toggle(2000,"swing");
}
///////////map starts
jQuery(function($) {
    //map api
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});
function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'hybrid'
    };
    // Display
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
    // Markers
    var markers = [
        ['Breckenridge, CO', 39.481228, -106.066778],
        ['Arapahoe Basin, CO', 39.642485, -105.871664],
        ['Vail, CO', 39.606401, -106.354940],
        ['Beaver Creek, CO', 39.585824, -106.507276],
        ['Keystone, CO', 39.604538, -105.954089]
    ];
    // Display markers
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    // place markers
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        // Automatically center the map fitting all markers
        map.fitBounds(bounds);
    }
    var trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(8);
        google.maps.event.removeListener(boundsListener);
    });
}
