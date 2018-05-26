/**
 * Use the account collection for this
 * 
 * If the user's level is higher than or equal to the required level of access of
 * a particular document level, then he can access all deeper document levels too.
 * Otherwise, he can't access anything
 */

 let userLevel = 2;
 db.accounts.aggregate([
     {$redact: {
         $cond: {
             if: {$lte: ["$level", userLevel]},
             then: "$$KEEP",
             else: "$$PRUNE"
         }
     }}
 ]);