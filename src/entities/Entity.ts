import { Graphics } from 'pixi.js';

export default class Entity 
{
   x: number;
   y: number;

   constructor(x: number, y: number)
   {
      this.x = x;
      this.y = y;
   }

   updatePosition(x: number, y: number)
   {
      this.x = x;
      this.y = y;
   }

   draw(graphics: Graphics)
   {
      
   }
}