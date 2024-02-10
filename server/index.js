import dotenv from "dotenv";
import connectDB from "./DB/Db.js";
dotenv.config();
import { app } from "./app.js";

connectDB().then(() => {
  app.on("erro", (error) => {
    console.log("ERROR :", error);
    throw error;
  });
});

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT}`);
});

// 