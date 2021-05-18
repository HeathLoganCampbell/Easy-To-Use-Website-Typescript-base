import { Graphics } from 'pixi.js';

import Entity from './Entity';

export default class Turtle extends Entity
{
   constructor(x: number, y: number)
   {
      super(x, y);
   }

   draw(graphics: Graphics)
   {
      graphics.beginFill(0xFF00FF);
      graphics.drawCircle(this.x, this.y, 20);
      graphics.endFill();
   }
}