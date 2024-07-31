# Timestamp Microservice

This repository showcases a Timestamp Microservice built using node.js. It returns responses for GET requests, converting dates (YYYY-MM-DD) and Unix (seconds) to UTC dates.

## Live preview

A live preview of this project can be seen [here](https://timestamp-microservice-jet.vercel.app/example.html).

## Setting it up locally

1. clone this repository: `git clone https://github.com/jvpdls/timestamp-microservice.git`
2. download its dependencies: `npm install`
3. uncomment lines 34-38 of `index.js`
3. run `npm start`

## Usage

### Routes
This microservice relies on one GET route pointing at `/api/:value`, where `:value` must be either a date formatted as `YYYY-MM-DD`or a Unix\* value. For example:
- `/api/2015-12-25`
- `/api/1451001600`

### Output
Both of the requests above would result in the following response:

`{"unix":1451001600, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`

## Examples
Once the project is initialized, you can always head over to `/example` to read its documentation on your browser.

*\* The unix time stamp is a way to track time as a running total of seconds. This count starts at the Unix Epoch on January 1st, 1970 at UTC. Therefore, the unix time stamp is merely the number of seconds between a particular date and the Unix Epoch.*
