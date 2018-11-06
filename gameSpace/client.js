// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
import {Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to a flat surface
  const sprite1 = new Surface();
  sprite1.setShape(Surface.SurfaceShape.Flat);
  sprite1.resize(300, 300);
  r360.renderToSurface(
    r360.createRoot('gameSpace', { /* initial prop */}),
    sprite1
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
