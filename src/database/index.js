import mongoose from "mongoose";

const connnectToDB = async () => {
  const URL =
    "mongodb+srv://dorinel1:dorinel1@cluster0-ulxuz.mongodb.net/test?retryWrites=true&w=majority";

  try {
    await mongoose.connect(URL);
    console.log("Database is connnected");
  } catch (error) {
    console.log("Error connect your database", error);
  }
};

export default connnectToDB;
