/*List only the awards won between 1990 and 2000 inlusive

Sample output:

{
	"name" : {
		"first" : "Dennis",
		"last" : "Ritchie"
	},
	"awards" : [
		{
			"award" : "National Medal of Technology",
			"year" : 1998,
			"by" : "United States"
		}
	]
}

*/

let fromYear = 1990;
let toYear = 2000;

db.bios.aggregate([
    {$project: {
        _id: 0,
        name: 1,
        awards: {
            $filter: {
                input: "$awards",
                as: "award",
                cond: {$and: [{$gte : ["$$award.year", fromYear]}, {$lte: ["$$award.year", toYear]}]}
            }
        }
    }}
])