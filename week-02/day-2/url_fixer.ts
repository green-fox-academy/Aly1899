'use strict';

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
url = url.slice(0, 5) + ':' + url.slice(5, url.length).replace('bots', 'odds')

console.log(url);