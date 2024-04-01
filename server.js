const mongoose =require("mongoose");
require("dotenv").config();
const app = require("./app")

const DB = process.env.MONGO_URI;

mongoose.connect(DB).then(() => {
    console.log(":) Database Connected. How is it going Comrade Server ??");
});
const port = process.env.PORT || 8080
const server = app.listen(port, () => {
    console.log(`Coast Clear Cap..Server up and running on PORT ${port}`);
})