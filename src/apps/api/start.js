/*
 * This file is used when starting app.js for dev purposes.
 * It is specified in package.json as the file targeted by nodemon.
 */

const app = require("./app.js");

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
