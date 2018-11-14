// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
import {Location} from 'react-360-web';
// import Entity from 'Entity';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default location
  // r360.renderToLocation(
  //   r360.createRoot('gameSpace', {/* initial props */}),
  //   r360.getDefaultLocation(),
  // );

  //custom location
  const location = new Location([0, 10, 10]);

  r360.renderToLocation(
    r360.createRoot('gameSpace', {/* initial props */}),
    location,
  );

  location.setWorldPosition(20,3,4);
  location.setWorldRotation(3, 0, 3);
 

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('Arizona.jpg'));
}

window.React360 = {init};
