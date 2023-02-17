const mongoose = require("mongoose");
const { MONGO_DEV_URL } = process.env;
exports.connect = () => {
  mongoose
    .connect(MONGO_DEV_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((x) => {
      console.log(`Connected to Mongo DB name: ${x.connections[0].name}`);
    })
    .catch((err) => {
      console.log(`Error connectijg to Mongo: ${err.reason}`);
    });
};
