const express = require("express");
const cors = require("cors");
require("dotenv").config();

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

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://visionai-backend-ubhl.onrender.com",
        "X-Title": "VisionAI"
      },
      body: JSON.stringify({
        model: "openrouter/free",
        messages: [
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 300
      })
    });

    const data = await response.json();
console.log("Status:", response.status);
console.log("Data:", JSON.stringify(data, null, 2));
    if (!response.ok) {
      return res.status(response.status).json({
        reply: JSON.stringify(data)
      });
    }

    res.json({
      reply: data.choices[0].message.content
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      reply: "Error connecting to AI."
    });
  }
});

app.post("/image", async (req, res) => {
  try {
    const { prompt } = req.body;

    const imageUrl =
      `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&model=flux&enhance=true&nologo=true`;

    res.json({
      image: imageUrl
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Image generation failed"
    });
  }
});
app.post("/enhance", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://visionai-backend-ubhl.onrender.com",
        "X-Title": "VisionAI"
      },
      body: JSON.stringify({
        model: "openrouter/free",
        messages: [
          {
            role: "system",
            content: "You are an expert prompt engineer. Return only an enhanced prompt."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 300
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: JSON.stringify(data)
      });
    }

    res.json({
      prompt: data.choices[0].message.content
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Prompt enhancement failed"
    });
  }
});

app.post("/video", async (req, res) => {
  res.json({
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

