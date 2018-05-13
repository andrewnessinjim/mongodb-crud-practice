/*Find the names of people who have won 3 or more awards and output the award names in an array

Sample output:

{
    "name" : "Kristen Nygaard",
	"awards" : [
		"Rosing Prize",
		"Turing Award",
		"IEEE John von Neumann Medal"
	]
}

*/

db.bios.aggregate([
    {$match: {"awards.2": {$exists: true}}},
    {$project: {
        _id: 0,
        name: {$concat : ["$name.first", " ", "$name.last"]},
        awards: 1
    }},
    {$unwind: "$awards"},
    {$group: {
        _id: "$name",
        awards: {$push : "$awards.award"}
    }},
    {$project: {
        _id: 0,
        name: "$_id",
        awards: 1
    }}
]).pretty();