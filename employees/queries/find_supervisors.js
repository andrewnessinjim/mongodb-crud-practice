/**
 * For employee, find their ancestors in terms of to whom they report
 */
db.employees.aggregate([
    {$graphLookup: {
        from: "employees",
        startWith: "$reportsTo",
        connectToField: "name",
        connectFromField: "reportsTo",
        as: "supervisors",
        depthField: "depth"
    }}
])