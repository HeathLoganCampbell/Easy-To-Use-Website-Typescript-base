import * as PIXI from 'pixi.js';
import Turtle from './entities/Turtle';

/*
Not really structured, but this class is meant to show
you how you can quickly render something to the screen

We have set the frame rate to 10 fps, just so the 
balls flash around less spazzy. 

But in this example we have 2 turtles that have the 
ability to teleport anywhere on the screen
*/

const app = new PIXI.Application({ antialias: true });
const graphics = new PIXI.Graphics();

app.renderer.resize(window.innerWidth,window.innerHeight )

document.body.appendChild(app.view);
app.stage.addChild(graphics);

app.ticker.maxFPS = 10;

let turtle = new Turtle(0, 0);
let turtle2 = new Turtle(0, 0);

app.ticker.add(() => {
   graphics.clear();

   turtle.draw(graphics);
   turtle2.draw(graphics);

   turtle.updatePosition(Math.random() * 1000, Math.random() * 1000);
   turtle2.updatePosition(Math.random() * 1000, Math.random() * 1000);
});

