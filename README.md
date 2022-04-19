# Poking around with AIS Play

So, AIS Play is a Thai streaming service by [AIS](https://www.ais.co.th/). They're an ISP and cell provider in Thailand known for having really good internet speeds and stuff.

I actually subscribe to TRUE, but I do still have an AIS subscription around just to use AIS Play. It's a pretty decent streaming service if you ignore the fact that it embeds subtitles in your anime, and some well-known anime (like Doraemon and Conan the Detective) have dubs instead for nostalgia reasons. You can also watch live TV on it. I use it all the time.

Anyway, this repo is my attempt at poking around (and possibly reverse-engineering) the AIS Play content delivery system, so we can directly scrape out the video feed and I can make a Jellyfin plugin for it.

If anyone happens to come across this repo, I'd love to get some help with it. Send me an issue or pull request if you have any suggestions on how to rip the video file properly. If you're an AIS employee, tell AIS to give us a proper API for this. or hire me or something.


## So what we've learned

AIS Play is a Python webapp that uses a REST API to deliver content. The REST API is a bit weird, but it does some stuff that I'm not sure how to replicate.

The direct video feed is locked behind a token and a session ID, but we don't actually know which headers to actually use to get the video. The funny thing is, the AIS devs didn't even bother to remove the logs *directly* displaying the direct video URL.

The video embed is powered by [vimmi](https://vimmi.net/html5-video-player/)'s HTML5 video player. I don't even know how they actually manage to access the live video tbh.

## The end goal

An ability to rip the video file directly from AIS Play. That's it. Call it piracy if you want.



## Notes
Thanks, and also fuck you to [dvwzj](https://github.com/dvwzj/aisplay-private-api) for making a private API for AIS Play, and not putting any documentation on it.