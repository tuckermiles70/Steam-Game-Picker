const fetch = require("node-fetch"); //To make request

/*
fetch('https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=F778122CA758FA979CAFF41B8081EF58&steamid=76561198138426605&include_appinfo=1')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
  */

 function doSomething(success){
    //do whatever you like
    console.log(success);
  }
 
  fetch('https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=F778122CA758FA979CAFF41B8081EF58&steamid=76561198138426605&include_appinfo=1')
     .then(data => data.json())
     .then(success => doSomething(success));