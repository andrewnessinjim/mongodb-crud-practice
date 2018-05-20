/*
 * Find the items that belong each of the below price brackets:
 * [0,100), [100,200), [200,300), [300,400), [400,infinity)
 *
 * Also find the items that belong each of the below year brackets:
 * [1880, 1900), [1900, 1920), [1920,1940)
 *
 * Answer both questions using a single query
 */


db.artwork.aggregate([
    {$facet: {
        price_bucket: [
            {$bucket: {
                groupBy: "$price",
                boundaries: [100,200,300,400],
                default: "other",
                output: {
                    titles: {$push: "$title"},
                    count: {$sum: 1}
                }
            }}
        ],
        year_bucket: [
            {$bucket: {
                groupBy: "$year",
                boundaries: [1880, 1900, 1920, 1940],
                default:"other",
                output: {
                    titles: {$push: "$title"},
                    count: {$sum: 1}
                }
            }}
        ]
    }}
]).pretty();