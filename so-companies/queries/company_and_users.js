/*
Question from this SO post: https://stackoverflow.com/questions/50152422/using-in-on-multiple-fields-in-mongodb

Given the user id and company id combination in the below format */

input_json = [{
    "userID":"2",
    "companyID":"6"
},
{
    "userID":"1",
    "companyID":"4"
},
{
    "userID":"3",
    "companyID":"6"
}]

/*Find the preferences of users who match any one of the combination above. The output must only include
the company id, user id (same as any one of the combination above), and the relevant preferences */

/*Query 1 */
filter = input_json.map(({companyID, userID}) => { return {companyID: companyID, "accounts.userID": userID}});

db.companies.aggregate([
    {$match : {
        $or: input_json
    }},
    {$unwind: "$accounts"},
    {$match : {
        $or: input_json
    }},
    {$project: {
        companyID : "$companyID",
        userID: "$accounts.userID",
        preferences: "$accounts.preferences"
    }}
])

/*Query 2 */
