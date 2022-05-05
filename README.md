# Access an Sqlite3 Database with Javascript

There are multiple excellent packages allowing to fetch data from a local
sqlite3 database. I've chosen to demonstrate `better-sqlite3` and `sequelize`.
To use these example, make sure to have a current version of
[nodejs](https://nodejs.org/en/download/package-manager/) installed.
Install the dependencies:

```
npm install
```

Download a copy of an sqlite version of the Northwind database.

```
npm run download-db
```

The regular SQL example can be found in `query.js`. Documentation can be found
in the [better-sqlite3 Github repository](https://github.com/JoshuaWise/better-sqlite3/blob/HEAD/docs/api.md#getbindparameters---row).
The example can be executed using

```
npm run query
```

The ORM example can be found in `orm_query.js`. Documentation can be found on
[sequelize.org](https://sequelize.org/). Execute the example using

```
npm run orm-query
```
