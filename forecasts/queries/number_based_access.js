/**
 * Use the accounts collection for this
 * 
 * A user should not be able to see any document level which needs a
 * access level greater than his own
 */

 let userLevel = 2;

 db.accounts.aggregate([
    {$redact: {
        $cond: {
            if : {$lt : [userLevel, "$level"]},
            then: "$$PRUNE",
            else: "$$DESCEND"
        }
    }}
 ]);