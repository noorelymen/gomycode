const mongoose = require("mongoose");
const { MONGO_DEV_URL } = process.env;
exports.connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const dbConn = await mongoose.connect(MONGO_DEV_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to Mongo Database name: ${dbConn.connections[0].name}`
    );
  } catch (err) {
    console.log(`Error connecting to mongo: ${err.message}`);
  }
};

// const mongoose = require("mongoose");
// const { MONGO_DEV_URL } = process.env;
// exports.connect = () => {
//   mongoose.set("strictQuery", false);
//   mongoose
//     .connect(MONGO_DEV_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then((x) => {
//       console.log(`Connected to Mongo Database name: ${x.connections[0].name}`);
//     })
//     .catch((err) => {
//       console.log(`Error connecting to mongo: ${err.reason}`);
//     });
// };
