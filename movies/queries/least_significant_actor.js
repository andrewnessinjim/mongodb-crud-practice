/**
 * Find the title, actors and the least significant actor of all movies
 */
db.movieDetails.aggregate([
    {$project: {
        title: 1,
        actors: 1,
        least_significant_actor: {$arrayElemAt:["$actors", -1]}
    }}
]).pretty();