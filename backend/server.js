import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Trade from "./models/tradeModel.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Define the API route
app.get("/api/exports/:reporter", async (req, res) => {
  const reporter = req.params.reporter; // Reporter should match the exact case
  console.log("Requested reporter:", reporter);

  try {
    // Ensure the query matches the case of the Reporter field in the database
    const data = await Trade.find({ Reporter: reporter });

    if (data.length > 0) {
      const formattedData = data.map((item) => ({
        ...item._doc,
        Reporter_Total_Imports: item.Reporter_Total_Imports.toString(),
        Partner_Total_Imports: item.Partner_Total_Imports.toString(),
        Reporter_Total_Exports: item.Reporter_Total_Exports.toString(),
        Partner_Total_Exports: item.Partner_Total_Exports.toString(),
        Ind1: item.Ind1.toString(),
        Ind2: item.Ind2.toString(),
        Ind3: item.Ind3.toString(),
        Ind4: item.Ind4.toString(),
      }));
      return res.status(200).json(formattedData);
    }
    return res.status(404).json({ message: "No data found for this reporter" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
