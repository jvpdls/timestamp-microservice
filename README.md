# Timestamp Microservice

This repository showcases a Timestamp Microservice built using node.js. It returns responses for GET requests, converting dates (YYYY-MM-DD) and Unix (seconds) to UTC dates.

## Setting it up locally

1. clone this repository: `git clone https://github.com/jvpdls/timestamp-microservice.git`
2. download its dependencies: `npm install`
3. initialize it with `npm start`

### Example Usage:
- Send a GET request to http://localhost:3000/api/2015-12-25
- Send a GET request to http://localhost:3000/api/1451001600

#### Example Output:
`{"unix":1451001600, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`

## Examples
Once the project is initialized, you can always go to http://localhost:3000/example to see how it works.
