////Conditions from wold weath online
var vailConditionGetter = $.ajax({
  url: "http://api.worldweatheronline.com/premium/v1/ski.ashx?q=Vail%20Colorado&key=61a99622a6c7a291196ac67acb103&num_of_days=3&sunset&format=json", // this expires in two months free trial
  // url: "http://api.worldweatheronline.com/free/v2/ski.ashx?q=Vail%20Colorado&key=ee2d8e8cd22262f8024c0edfe69e3&num_of_days=1&sunset&format=json", // this is the free key
  method: "GET",
  dataType: "json"
});
var breckConditionGetter = $.ajax({
  url: "http://api.worldweatheronline.com/premium/v1/ski.ashx?q=Breckenridge%20Colorado&key=61a99622a6c7a291196ac67acb103&num_of_days=3&sunset&format=json", // this expires in two months free trial
  method: "GET",
  dataType: "json"
});
var bcConditionGetter = $.ajax({
  url: "http://api.worldweatheronline.com/premium/v1/ski.ashx?q=81620&key=61a99622a6c7a291196ac67acb103&num_of_days=3&sunset&format=json", // this expires in two months free trial
  method: "GET",
  dataType: "json"
});
var ksConditionGetter = $.ajax({
  url: "http://api.worldweatheronline.com/premium/v1/ski.ashx?q=silverthorn%20Colorado&key=61a99622a6c7a291196ac67acb103&num_of_days=3&sunset&format=json", // this expires in two months free trial
  method: "GET",
  dataType: "json"
});
var abConditionGetter = $.ajax({
  url: "http://api.worldweatheronline.com/premium/v1/ski.ashx?q=80435&key=61a99622a6c7a291196ac67acb103&areaName&num_of_days=3&sunset&format=json", // this expires in two months free trial
  method: "GET",
  dataType: "json"
});
////*********this call is for brekenridge
var breckGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/415:CO:SNTL",
  // url: "https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/937:CO:SNTL",
  method: "GET",
  dataType: "json"
});
////*********this call is for vail
var vailGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/842:CO:SNTL",
  method: "GET",
  dataType: "json"
});
////*********this call is for bever creek
var bcGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/1040:CO:SNTL",
  method: "GET",
  dataType: "json"
});
////*********this call is for bever creek
var abGetter = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/505:CO:SNTL",
  method: "GET",
  dataType: "json"
});
////*********this call is for bever creek
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
vailConditionGetter.done(function(response){
  console.log(response["data"]["weather"][0]);
})
vailConditionGetter.done(function(response){
  for (var day = 0; day < 3; day++) {
  console.log(
  response["data"]["weather"][day]["chanceofsnow"],
  response["data"]["weather"][day]["totalSnowfall_cm"],
  response["data"]["weather"][day]["bottom"][0]["maxtempF"],
  response["data"]["weather"][day]["bottom"][0]["mintempF"],
  response["data"]["weather"][day]["top"][0]["maxtempF"],
  response["data"]["weather"][day]["top"][0]["mintempF"],
  response["data"]["weather"][day]["hourly"][0]["top"][0]["windspeedMiles"],
  response["data"]["weather"][day]["hourly"][0]["chanceofsunshine"],
  response["data"]["weather"][day]["astronomy"][0]["sunrise"],
  response["data"]["weather"][day]["astronomy"][0]["sunset"]
)
}
})
