  //returns length
  function length(obj) {
    return Object.keys(obj).length;
  }

  //Had to modify URL to fix CORS issue. Doc I used for reference in Extras
  const Url = 'https://cors-anywhere.herokuapp.com/https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=F778122CA758FA979CAFF41B8081EF58&steamid=76561198138426605&include_appinfo=1';
  var games = new Array();  


  $.getJSON(Url, function(data) {
    var response = JSON.parse(JSON.stringify(data));
    //var len = length(response.response.games);
    //console.log(len);
    for (var i = 0; i < length(response.response.games); i++) {
      var cur = response.response.games[i].name;

      //games.push(response.response.games[i].name);
      games.push(cur);
      
      //console.log(games.length);

      //console.log(cur);
      
      //console.log(cur);  //Logging proper syntax to just retrieve games.
    }

    for (var i = 0; i < games.length; i++) {
      console.log(games[i]);
    }

    ul = document.createElement('ul');
    document.getElementById('myGameList').appendChild(ul);

    games.forEach(function (item) {
      let li = document.createElement('li');
      ul.appendChild(li);

      li.innerHTML += item;

    });

  });

