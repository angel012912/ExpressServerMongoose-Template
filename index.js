/*
Author: Jose Angel Garcia Gomez
Date: 13-04-2023
Description: Main program that starts the server and connects to the database
*/

const express = require("express");
const mongoose = require("mongoose");
const sampleRoutes = require("./routes/sample-routes");

const mongoConnectionPath = "mongodb://localhost:27017/sample-express-database";
const serverPort = 5500;

//Connect to mongo
mongoose
	.connect(mongoConnectionPath, { useNewUrlParser: true })
	.then(() => {
        var port = process.env.PORT || serverPort;
		const app = express();
		app.use(express.json());
		// Define the routes and their paths
		app.use("/api/sample-route", sampleRoutes);

		app.listen(port, () => {
			console.log("Server running on port", port);
            console.log("Successfully connected to MongoDB!");
		})
	}).catch(e=>{
        console.log(e);
    });



