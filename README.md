# JavaScript client for the Directions API for Angular

This library was forked from https://github.com/graphhopper/directions-api-js-client for a test of Angular.

## Install

Run `npm install --save https://github.com/JeongJun-Lee/directions-api-js-client/tarball/master`

## How to use

Basically, same as https://github.com/graphhopper/directions-api-js-client/blob/master/README.md

But, You can import classes without error in Angular.

```
import { GraphHopperRouting } from 'graphhopper-js-api-client/src/GraphHopperRouting';
import { GHInput } from 'graphhopper-js-api-client/src/GHInput';

...

const ghRouting = new GraphHopperRouting({
  key: 'Your-API-Key',
  //host: 'http://localhost:8989', // If you have a local backend
  vehicle: 'car'
});
    
// Setup your own Geo Points
ghRouting.addPoint(new GHInput(47.400905, 8.534317));
ghRouting.addPoint(new GHInput(47.394108, 8.538265));

ghRouting.doRequest().then(json => {
  // Add your own result handling here
  console.log(json);
}).catch(err => {
  console.error(err.message);
});

...
```
