/**
 * Find all the movies in the movieDetails collection that have
 * a metacritic score less than or equal to 30.
 * In addition, do not display the score when the score is less than or equal to10
 * (We want to know the bad movies, but not how bad when they're too bad)
 */

 db.movieDetails.aggregate([
     {$match: {
        metacritic : {$lte : 30}
     }},
     {$addFields: {
        metacritic: {
            $cond: {
                if: {$lte: ["$metacritic", 10]},
                then: "$$REMOVE",
                else: "$metacritic"
            }
        }
     }},
     {$project: {
         metacritic: 1
     }}
 ]).pretty();