"use strict";

const express         = require('express');
const mongoose        = require('mongoose');
const app             = express();
const http 			  = require("http").Server(app);
const port            = process.env.PORT || 1337;
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');

// Expose the 'frontend' and 'libraries' folder for all
app.use(express.static(__dirname + '/frontend'));
app.use('/libs',  express.static(__dirname + '/libs'));

// Allow headers / datatypes etc to be set
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
app.use(methodOverride());

// Routes
// ------------------------------------------------------
//require('./backend/routes.js')(app);

// Start
// -------------------------------------------------------
http.listen(1337, () => {

	console.log("Server is alive on port 1337");

})  


