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


  // //construct a new Flat surface in my app runtime
  // const myFlatSurface = new Surface(
  //   300, /* width */
  //   600, /* height */
  //   Surface.SurfaceShape.Flat /* shape */
  // );

  // Render content1 to flat surface
  const content1 = new Surface();
  content1.setShape(Surface.SurfaceShape.Flat);
  content1.resize(4000, 500);
  r360.renderToSurface(
    r360.createRoot('contentOne', { /* initial props */ }),
    content1
  );

  content1.setAngle(
    -Math.PI / 2,
    0
  );

  // Render content2 to flat surface
  const content2 = new Surface();
  content2.setShape(Surface.SurfaceShape.Flat);
  content2.resize(4000, 500);
  r360.renderToSurface(
    r360.createRoot('contentTwo', { /* initial props */ }),
    content2
  );

  content2.setAngle(
    +Math.PI / 2, // horizontal angle
    0 // vertical angle
  );

  // Render content3 to flat surface
  const content3 = new Surface();
  content3.setShape(Surface.SurfaceShape.Flat);
  content3.resize(1000, 300);
  r360.renderToSurface(
    r360.createRoot('contentThree', { /* initial props */ }),
    content3
  );

  content3.setAngle(
    0, // horizontal angle
    0 // vertical angle
  );

  // floor surface
  const floorMenuSur = new Surface();
  floorMenuSur.setShape(Surface.SurfaceShape.Flat);
  floorMenuSur.resize(6000, 8000);
  r360.renderToSurface(
    r360.createRoot('floorMenu', { /* initial props */}),
    floorMenuSur
  );

  floorMenuSur.setAngle(
    0, // horizontal angle
    -Math.PI / 2 // vertical angle
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
