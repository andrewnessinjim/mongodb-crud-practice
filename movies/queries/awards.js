/**
 * For all movies released between 1990 and 2000 inclusive, extract the awards details.
 * Each output should have the below form:
 *
    {
	"wins" : 4,
	"nominations" : 19,
	"text" : "Nominated for 1 Oscar. Another 4 wins & 19 nominations."
    }

 */

 db.movieDetails.aggregate([
     {$match: {
        year: {
            $gte: 1990,
            $lte: 2000
        },
        awards: {$exists: true}
     }},
     {$replaceRoot: {
         newRoot: "$awards"
     }}
 ]).pretty()