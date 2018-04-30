/**
 * Find the state and population of the most highly populated state
 */
db.zipcodes.aggregate([
    {$group: {
        _id: "$state",
        totalPop: {$sum: "$pop"}
    }},
    {$project: {
        _id: 0,
        state: "$_id",
        totalPop: 1
    }},
    {$sort: {
        totalPop: -1
    }},
    {$limit: 1}
])