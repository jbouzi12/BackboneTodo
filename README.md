# BackboneTodo

This is a simple Node, Express, MongoDB, Backbone TODO list with a twist. Once you've marked an item as finished, you are reminded that you have already crossed that item off and cannot add it again. Essentially it is a bucket list. 
If you do not have Node, Express, or MongoDB installed, do so before running this application.

## Getting Started

Before getting started, you must create the database locally:

run 
```
mongo
```
Once in the mongoDB interface, create a Todo collection:

```
use todos
```
To show the current DB or all dbs run the following commands respectively:
```
db
show dbs
```
Now that we have our database, we must run mongodb while our app is running. Therefore in one terminal we will run mongo while in another we will install our dependencies and run the app:
```
mongod
```
In another window:
```
npm install
npm start
```





