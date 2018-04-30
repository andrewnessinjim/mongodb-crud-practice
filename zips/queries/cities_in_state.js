/**
 * Find the number of cities in each state
 */

 db.zipcodes.aggregate([
     {$group : {
         _id : "$state",
         cities : {$sum : 1}
     }}
 ])