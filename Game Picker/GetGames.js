//const fetch = require("node-fetch"); //To make request

/*
fetch('https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=F778122CA758FA979CAFF41B8081EF58&steamid=76561198138426605&include_appinfo=1')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
  */

  //returns length
  function length(obj) {
    return Object.keys(obj).length;
  }

/*
 function doSomething(success){
    //do whatever you like
    var response = JSON.parse(JSON.stringify(success));
    for (var i = 0; i < length(response.response.games); i++) {
      console.log(response.response.games[i].name);  //Logging proper syntax to just retrieve games.
    }
  }
 
  fetch('https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=F778122CA758FA979CAFF41B8081EF58&steamid=76561198138426605&include_appinfo=1')
     .then(data => data.json())
     .then(success => doSomething(success));
     */

     /*
    function doSomething(success){
      //do whatever you like
      var response = JSON.parse(JSON.stringify(success));
      for (var i = 0; i < length(response.response.games); i++) {
        console.log(response.response.games[i].name);  //Logging proper syntax to just retrieve games.
      }
    }
   */

  //returns length
  function length(obj) {
    return Object.keys(obj).length;
  }

   //Had to modify URL to fix CORS issue. Doc in Extras
   const Url = 'https://cors-anywhere.herokuapp.com/https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=F778122CA758FA979CAFF41B8081EF58&steamid=76561198138426605&include_appinfo=1';

  $.getJSON(Url, function(data) {
    var response = JSON.parse(JSON.stringify(data));
    //console.log(data.response.games[0].name);
    for (var i = 0; i < length(response.response.games); i++) {
      console.log(response.response.games[i].name);  //Logging proper syntax to just retrieve games.
    }
  });

