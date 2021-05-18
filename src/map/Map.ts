import Entity from '../entities/Entity';

export default class Map
{
   constructor()
   {
      console.log("Map Created");
   }

   public addEntity(entity: Entity)
   {
      console.log("Entity added");
   }
}