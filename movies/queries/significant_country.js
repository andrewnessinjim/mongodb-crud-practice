/**
 * Find the title and list of countries of all movies where the first listed country
 * is Italy
 */

//Query 1
db.movieDetails.find(
    {"countries.0": "Italy"},
    {countries:1, title:1, _id: 0}).pretty();

//Query 2
db.movieDetails.find({
    $expr: {
        $eq: [{$arrayElemAt:["$countries", 0]}, "Italy"]
    }
}, {countries:1, title:1, _id: 0});