// Code your solution in this file!

function distanceFromHqInBlocks (pickup) {
  return Math.abs(pickup - 42) 
 }
 

function distanceFromHqInFeet (pickup) {
 const blocks = distanceFromHqInBlocks(pickup) 
 return blocks * 264;
}

function distanceTravelledInFeet (start, end) {
   const distanceTravelled = Math.abs(end - start)
   return distanceTravelled * 264;

}

 function calculatesFarePrice (start, end){
      const traveld = distanceTravelledInFeet (start, end)
     if (traveld  < 400) {

        return 0;

     } else if (traveld > 400 && traveld  < 2000){

      return (traveld  - 400) * 2 / 100;

     }else if (traveld > 2000 && traveld  < 2500){

      return 25;

     }else if (traveld  > 2500) {

      return 'cannot travel that far'

     }

 }