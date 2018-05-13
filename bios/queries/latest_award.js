/*Find the latest award/awards won by each person based on the year of award

Sample output:

{
	"name" : "Ole-Johan Dahl",
	"latest_awards" : [
		"Turing Award",
		"IEEE John von Neumann Medal"
	]
}
*/

//Query 1
db.bios.aggregate([
    {$match : {"awards.year" : {$exists :true}}},
    {$project: {
        _id: 0,
        name: {$concat : ["$name.first", " ", "$name.last"]},
        awards: 1
    }},
    {$addFields: {
        latest_year: {$max : "$awards.year"}
    }},
    {$addFields: {
        latest_awards: {
            $filter: {
                input: "$awards",
                as: "award",
                cond: {$eq: ["$$award.year", "$latest_year"]}
            }
        }
    }},
    {$project: {
        name: 1,
        latest_awards: "$latest_awards.award"
    }}
]).pretty();

//Query 2
db.bios.aggregate([
    {$match : {"awards.year" : {$exists :true}}},
    {$project: {
        _id: 0,
        name: {$concat : ["$name.first", " ", "$name.last"]},
        awards: 1
    }},
    {$addFields: {
        latest_awards: {
            $let :{
                vars: {
                    latest_year: {$max : "$awards.year"}
                },
                in: {
                    $filter: {
                        input: "$awards",
                        as: "award",
                        cond: {$eq: ["$$award.year", "$$latest_year"]}
                    }
                }
            }
        }
    }},
    {$project: {
        name: 1,
        latest_awards: "$latest_awards.award"
    }}
]).pretty();