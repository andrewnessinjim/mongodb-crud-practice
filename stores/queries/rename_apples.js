/*Rename apples to redApples in the fruits array in all the documents*/

db.stores.updateMany(
    {fruits : "apple"},
    {$set : {
        "fruits.$" : "redApples"
    }}
);