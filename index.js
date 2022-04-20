// An attempt to figure out AIS Play's API so I can use it to scrape video data.
// This uses the AIS Play Private API library from https://github.com/dvwzj/aisplay-private-api
// Which literally has 0 documentation. I guess this is probably some private code that isn't supposed to be on the NPM.


var showid = '5cb5f4eeaae731677f313686'

// Import the AISPlay object from aisplay-private-api
// Don't worry about the secret. This is a temporary token.
const AISPlay = require('./ais/play.js');
let aisplay = new AISPlay({
    privateid: '5cc30959b6',
    udid: '62482ba8640a7648c598b0c9',
})


// This will try to fetch and log data of Conan the Detective (You proably know it as Case Closed if you live in the US) S1E1


// The raw media source here is indeed valid, but we can't use it for some reason as it returns a 403 error. Probably needs extra headers.
// (Header data help needed)
/* aisplay.source('vod', showid).then(function(data) {
    console.log(data);
}) */


// This returns an error complaining about trying to read a StartsWith of an undefined value.
// Patching this returns a 404 error instead.


var a = aisplay.get('play', showid)

console.log(a)