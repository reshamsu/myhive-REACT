import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock API endpoint for sending leads
app.post("/api/send-lead", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    phoneType,
    office,
    message,
    source,
  } = req.body;

  // Log the request for debugging
  console.log("Received form submission:", {
    firstName,
    lastName,
    email,
    phone,
    phoneType,
    office,
    message,
    source,
  });

  // Simulate validation
  if (!firstName || !email) {
    return res.status(400).json({
      success: false,
      message: "First name and email are required fields.",
    });
  }

  // Simulate a delay like a real API call
  setTimeout(() => {
    // Return a success response
    res.status(200).json({
      success: true,
      message:
        "Thank you! Your message has been sent successfully. (MOCK SERVER)",
    });
  }, 1000);
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res
    .status(200)
    .json({
      status: "Mock server is running",
      timestamp: new Date().toISOString(),
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Mock server running on http://localhost:${PORT}`);
  console.log(`Health check available at http://localhost:${PORT}/api/health`);
});
