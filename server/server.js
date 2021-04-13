// https://bezkoder.com/react-node-express-mysql/#Nodejs_Express_Back-end

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// connect database
const db = require("./models/index.js");
db.sequelize.sync();
/*
In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
*/

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// TODO add all routes
const employees = require("./routes/employee.routes")
const customers = require("./routes/customer.routes")
const books = require("./routes/book.routes")
const audiobooks = require("./routes/audiobook.routes")
const devices = require("./routes/device.routes")
const dvds = require("./routes/dvd.routes")
const magazines = require("./routes/magazine.routes")
const locations = require("./routes/location.routes")
const authors = require("./routes/author.routes")
const publishers = require("./routes/publisher.routes")
const narrators = require("./routes/narrator.routes")
const series = require("./routes/series.routes")
app.use("/employees", employees);
app.use("/customers", customers);
app.use("/books", books);
app.use("/audiobooks", audiobooks);
app.use("/devices", devices);
app.use("/dvds", dvds);
app.use("/magazines", magazines);
app.use('/locations', locations);
app.use('/authors', authors);
app.use('/publishers', publishers);
app.use('/narrators', narrators);
app.use('/series', series);

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to cosc3380 library backend application." });
});

/*
// include routes right before app.listen()
require("./routes/employee.routes")(app);
require("./routes/customer.routes")(app);
require("./routes/location.routes")(app);
require("./routes/author.routes")(app);
require("./routes/publisher.routes")(app);
require("./routes/narrator.routes")(app);
require("./routes/series.routes")(app);
*/
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
