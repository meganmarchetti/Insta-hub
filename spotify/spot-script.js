// JS for spotify page
const search = document.querySelector(".search");
const butn = document.querySelector(".butn");
const input = document.querySelector(".input");
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

butn.addEventListener("click", () => { //search button becomes active upon clicks
    search.classList.toggle("active");
    input.focus();
})



//currently listening to
var atoken = "BQCP3G18FXv1zckomVBWMU5hFu7YYDfNL6p64dS_mBY5GlPR1aQ3pIoHekr5MJRUCJSBx-jKnqwIx17K0k2PidVyg7LErPmmfRfLj2JsNAEER8cI2tAfKTSVA9XV-HFrV-oi5xVEYdhLFKMFv0f4i2EiK9F3twWmohekkKWsKdHg9IEBYUomRf4T18VUrbU3LhyuiaKBW4xaArr1C1AJH0gL-lRQ15itTjXm8hY";

$.ajax({
  type: "GET",
  url: "https://api.spotify.com/v1/me/player/currently-playing?market=ES",
  headers: {
     'Authorization' : 'Bearer ' + atoken
  },
  success: function(data) {
    console.log(data);

    var artwork = data.item.album.images[1].url;
    var trackName = data.item.name;
    var artistName = data.item.artists[0].name;
    var albumName = data.item.album.name;
    var relDate = data.item.album.release_date;
    var pb = data.context.external_urls.spotify;
    var tb = data.item.external_urls.spotify;


    var artworkID = document.getElementById('trackArtwork');
    var track = document.getElementById('trackName');
    var artist = document.getElementById('artist');
    
    
    artworkID.innerHTML = '<img src=' + artwork + '>';
    track.textContent = trackName;
    artist.textContent = 'By ' + artistName;


    var artworkID1 = document.getElementById('trackArtwork1');
    var track1 = document.getElementById('trackName1');
    var artist1 = document.getElementById('artist1');
    var album = document.getElementById("album");
    var release = document.getElementById("release");
    var pbtn = document.getElementById("pbtn");
    var tbtn = document.getElementById("tbtn");
    
    artworkID1.innerHTML = '<img src=' + artwork + '>';
    track1.textContent = trackName;
    artist1.textContent = artistName;
    album.textContent = albumName;
    release.textContent = relDate.substring(0, 4);
    pbtn.innerHTML = '<a target=_blank href="' + pb + '">Listen to Playlist</a>';
    tbtn.innerHTML = '<a target=_blank href="' + tb + '">Listen to Track</a>';

  },
  dataType: "json"
});


$.ajax({
  type: "GET",
  url: "https://api.spotify.com/v1/users/meegan98",
  headers: {
     'Authorization' : 'Bearer ' + atoken
  },
  success: function(data) {
    console.log(data);
    
    var ppic = data.images[0].url;
    var fwers = data.followers.total;
    var user = data.display_name;
    var lnk = data.external_urls.spotify;

    
    var propic = document.getElementById("propic");
    var followers = document.getElementById("followers");
    var uname = document.getElementById("uname");
    var plink = document.getElementById("plink");
    
    
    propic.innerHTML = "<img src=" + ppic + ">";
    followers.textContent = fwers;
    uname.textContent = user;
    plink.innerHTML = '<a target=_blank href="' + lnk + '">Full Profile</a>';
    
  
  },
  dataType: "json"
});



$.ajax({
  type: "GET",
  url: "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=3&offset=0",
  headers: {
     'Authorization' : 'Bearer ' + atoken
  },
  success: function(data) {
    console.log(data);

    var top1 = data.items[0].name;
    var top2 = data.items[1].name;
    var top3 = data.items[2].name;

    var pic1 = data.items[0].images[0].url;
    var pic2 = data.items[1].images[0].url;
    var pic3 = data.items[2].images[0].url;

    var genre1 = data.items[0].genres[0];
    var genre2 = data.items[1].genres[0];
    var genre3 = data.items[2].genres[3];

    var pics1 = document.getElementById("pic1");
    var pics2 = document.getElementById("pic2");
    var pics3 = document.getElementById("pic3");

    var names1 = document.getElementById("name1");
    var names2 = document.getElementById("name2");
    var names3 = document.getElementById("name3");

    var genres1 = document.getElementById("genre1");
    var genres2 = document.getElementById("genre2");
    var genres3 = document.getElementById("genre3");

    pics1.innerHTML = "<img src=" + pic1 + ">";
    pics2.innerHTML = "<img src=" + pic2 + ">";
    pics3.innerHTML = "<img src=" + pic3 + ">";
    names1.textContent = top1;
    names2.textContent = top2;
    names3.textContent = top3;
    genres1.textContent = genre1;
    genres2.textContent = genre2;
    genres3.textContent = genre3;
  
  },
  dataType: "json"
});
