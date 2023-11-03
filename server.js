// This code sets up our app, picks a port for the server, connects different routes, 
// and gets the database ready to use.

// Import necessary modules
const express = require("express");
const mongodb = require("./data/database");

// Create an instance of the Express application
const app = express();

// Define the port number, using process.env.PORT if available or 8080 as a default
const port = process.env.PORT || 8080;

// Use the routes defined in "./routes" for the root path
app.use("/", require("./routes"));

// Initialize the database and start the Express server
mongodb.initDb((err) => {
    if (err) {
        console.log(err); // Log any database initialization errors
    } else {
        // Start the Express server and log a message when it's running
        app.listen(port, () => console.log(`Database is listening and node running on Port: ${port}`));
    }
});



