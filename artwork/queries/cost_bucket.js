/**
 * Find the items that belong each of the below price brackets:
 * [0,100), [100,200), [200,300), [300,400), [400,infinity)
 */

db.artwork.aggregate([
    {$bucket : {
        groupBy: "$price",
        boundaries: [0, 100, 200, 300, 400],
        default: "400",
        output: {
            titles: {$push: "$title"},
            count: {$sum: 1}
        }
    }}
]);