const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "VisionAI Backend is running 🚀"
  });
});

app.post("/chat", async (req, res) => {

  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash"
    });

    const result = await model.generateContent(message);
    const response = result.response.text();

    res.json({
      reply: response
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply: "Error connecting to Gemini AI"
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
