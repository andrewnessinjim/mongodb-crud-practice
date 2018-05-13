/*Remove all the year fields from the awards arrays */

db.bios.updateMany(
    {"awards" : {$exists: true}},
    {
        $unset : { "awards.$[].year" : ""}
    }
);