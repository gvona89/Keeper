
const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/keeper";


/* Step 2
 *
 * Open up a connection to the mongo database.
 *
 * NOTE: newUrlParser diables a deprecation warning
 */
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });


/* Export the mongoose object.
 *
 * This will allow us to use the same connection to our DB
 * across our different controllers.
 *
 */
module.exports = mongoose
