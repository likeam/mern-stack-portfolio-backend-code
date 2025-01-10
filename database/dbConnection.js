import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "PORTFOLIO",
    })
    .then(() => {
      console.log("Connocted to  DataBase");
    })
    .catch((error) => {
      console.log(`Some Error Occured while connecting to DataBase : ${error}`);
    });
};

export default dbConnection;
