# mongodb-CRUD-practice
The project contains a set of folders, one folder per database. You will find two sub-directories named "`data`" and "`queries`" 
inside each folder. Here's an example:
```
.
├── restaurants
│   ├── data
│   │   └── data.json
│   └── queries
│       ├── closest_restaurant.js
│       └── restaurants_in_area.js
└── zips
    ├── data
    └── queries
```

In this example, `restaurants` and `zips` are two different databases. The path `./restaurants/data/` will contain all the
data you will need to import in your local mongod instance to try out the examples in `restaurants` db. You will also find
"`import.txt`" file which you can use to import the dataset. The `queries` directory will contain one file per question.
Each file will contain a commented question and a list of different mongodb queries answering that question. In the above
example, `closest_restaurant.js` and `restaurants_in_area.js` are two such files with a question and queries answering that
question.

Here are some ways you can contribute to the project:

1) You can add a new database. This can be a static db, or some logical piece of JavaScript code that can auto-generate a
database by executing it in the mongo shell.
2) You can look up existing questions and queries and understand them, and correct them or enhance them, or add new answers. 
This will be a good learning exercise.
3) You can add new questions to existing databases.
