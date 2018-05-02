//Find all the restaurants in Fordham South

let fordhamSouth = db.neighborhoods.findOne({name : "Fordham South"});

db.restaurants.find({
    location : {
        $geoWithin : {
            $geometry : fordhamSouth.geometry
        }
    }
}).pretty()