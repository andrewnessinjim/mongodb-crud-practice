/**
 * For every document, extract the title and the price. In addition, add a new field called priceBracket
 *
 * priceBracket should either have value "budget", if the price is less than 200. It should be "expensive"
 * otherwise.
 *
 * Also, if the price is missing for the document, the priceBracket tag should not be generated
 */


db.artwork.aggregate([
    {$addFields: {
        priceBracket: {
            $cond: {
                if: {$eq: [true, {$ifNull: ["$price", true]}]},
                then: "$$REMOVE",
                else: {
                    $cond: {
                        if: {$lte: ["$price", 200]},
                        then: "budget",
                        else: "expensive"
                    }
                }
            }
        }
    }},
    {$project: {
        _id: 0,
        price: 1,
        title: 1,
        priceBracket: 1
    }}
]).pretty();