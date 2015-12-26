////*********this response is for brekenridge
var newGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://feeds.snocountry.net/getResortList.php?apiKey=SnoCountry.example&states=vt&resortType=alpine&output=json",
  method: "GET",
  dataType: "json"
});
var breckGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/415:CO:SNTL",
  // url: "https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/937:CO:SNTL",
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
//************** best mountain***********8
$('#motdBtn').click(function(){
  snI = 0;
  bstSn = 0;
  console.log('click');
    bcGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if (snI === null) {
        snI = snI;
      } else if (sDepth >= bstSn){
        snI = "bc";
        bstSn = sDepth;
      }
    })
    vailGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if (snI === null) {
        snI = snI;
      } else if (sDepth >= bstSn){
        snI = "vail";
        bstSn = sDepth;
      }
    })
    ksGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if (snI === null) {
        snI = snI;
      } else if (sDepth >= bstSn){
        snI = "ks";
        bstSn = sDepth;
      }
    })
    breckGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if (snI === null) {
        snI = snI;
      } else if (sDepth >= bstSn){
        snI = "brek";
        bstSn = sDepth;
      }
    })
    abGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if (snI === null) {
        snI = snI;
      } else if (sDepth >= bstSn){
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
////snow rate
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
