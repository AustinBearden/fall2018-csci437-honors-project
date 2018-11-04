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
  content1.resize(400, 400);
  r360.renderToSurface(
    r360.createRoot('contentOne', { /* initial props */ }),
    content1
  );

  content1.setAngle(
    0,
    0
  );

  // Render content2 to flat surface
  const content2 = new Surface();
  content2.setShape(Surface.SurfaceShape.Flat);
  content2.resize(400, 400);
  r360.renderToSurface(
    r360.createRoot('contentTwo', { /* initial props */ }),
    content2
  );

  content2.setAngle(
    -Math.PI / 6, // horizontal angle
    0 // vertical angle
  );

  // Render content3 to flat surface
  const content3 = new Surface();
  content3.setShape(Surface.SurfaceShape.Flat);
  content3.resize(400, 400);
  r360.renderToSurface(
    r360.createRoot('contentThree', { /* initial props */ }),
    content3
  );

  content3.setAngle(
    +Math.PI / 6, // horizontal angle
    0 // vertical angle
  );

  // Render content4 to flat surface
  const content4 = new Surface();
  content4.setShape(Surface.SurfaceShape.Flat);
  content4.resize(400, 400);
  r360.renderToSurface(
    r360.createRoot('contentFour', { /* initial props */ }),
    content4
  );

  content4.setAngle(
    0, // horizontal angle
    Math.PI / 8 // vertical angle
  );

  // Render content5 to flat surface
  const content5 = new Surface();
  content5.setShape(Surface.SurfaceShape.Flat);
  content5.resize(400, 400);
  r360.renderToSurface(
    r360.createRoot('contentFive', { /* initial props */ }),
    content5
  );

  content5.setAngle(
    -Math.PI / 6, // horizontal angle
    Math.PI / 8 // vertical angle
  );
  
  // Render content6 to flat surface
  const content6 = new Surface();
  content6.setShape(Surface.SurfaceShape.Flat);
  content6.resize(400, 400);
  r360.renderToSurface(
    r360.createRoot('contentSix', { /* initial props */ }),
    content6
  );

  content6.setAngle(
    +Math.PI / 6, // horizontal angle
    Math.PI / 8 // vertical angle
  );

  // Render controlPanel to flat surface
  const controlPanel = new Surface();
  controlPanel.setShape(Surface.SurfaceShape.Flat);
  controlPanel.resize(600, 300);
  r360.renderToSurface(
    r360.createRoot('controlPanel', { /* initial props */}),
    controlPanel
  );

  controlPanel.setAngle(
    0, // horizontal angle
    -Math.PI / 6 // vertical angle

  );

  
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
