/**
 * List all the cities in Montana
 */

 db.zipcodes.aggregate([
     {$match : {
        state : "MT"
     }},
     {$group : {
        _id : "$state",
        cities : {$push : "$city"}
     }}
 ])