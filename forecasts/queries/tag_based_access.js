/**
 * Use the forecasts collection for this
 * Assume the user has access to the provided tags.
 * Fetch all data accessible to him based on the access configurations
 * Here's how the configurations work:
 * 
 * 1)   If the user has an access "X", then he can access all document levels whose tags 
 *      value includes "X"
 * 2)   If the user doesn't have an access "X", then he cannot access any document level
 *      that needs access "X", and all deeper levels
 */

 let userAccess = ["T"];

 db.forecasts.aggregate([
     {$redact : {
         $cond: {
             if : {$gt : [{$size : {$setIntersection: [userAccess, "$tags"]}} ,0]},
             then: "$$DESCEND",
             else: "$$PRUNE"
         }
     }}
 ]).pretty();

 db.forecasts.aggregate([
    {$redact : {
        $cond: {
            if : {$gt : [{$size : {$setIntersection: [userAccess, "$tags"]}} ,0]},
            then: "$$KEEP",
            else: "$$PRUNE"
        }
    }}
]).pretty();