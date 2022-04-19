// An attempt to figure out AIS Play's API so I can use it to scrape video data.
// This uses the AIS Play Private API library from https://github.com/dvwzj/aisplay-private-api
// Which literally has 0 documentation. I guess this is probably some private code that isn't supposed to be on the NPM.




// Import the AISPlay object from aisplay-private-api
const AISPlay = require('aisplay-private-api');
let aisplay = new AISPlay({
    privateid: '5cc30959b6',
    udid: '62482ba8640a7648c598b0c9',
})


// This will try to fetch and log data of Conan the Detective (You proably know it as Case Closed if you live in the US) S1E1


// The raw media source here is indeed valid, but we can't use it for some reason as it returns a 403 error. Probably needs extra headers.
// (Header data help needed)
/* aisplay.source('vod', '5a9f4b05aae73154d24dfd55').then(function(data) {
    console.log(data);
})
 */

// This returns an error complaining about trying to read a StartsWith of an undefined value.
// Patching this returns a 404 error instead.
aisplay.get('item', '5a9f4b05aae73154d24dfd55').then(function(data) {
    //console.log(data);
    aisplay.get('play', data).then(function(a) {
        console.log(a);
    })
})


// This returns the same kind of data as source, but with a different URL. doesn't work still.
aisplay.get_xml('vod', '5a9f4b05aae73154d24dfd55').then(function(data) {
    console.log(data);
    console.log(data.Metadata.PlaybackUrls)
})