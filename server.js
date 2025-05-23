import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint for sending leads to GoHighLevel
app.post("/api/send-lead", async (req, res) => {
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

  try {
    // Log the request for debugging
    console.log("Sending lead to GHL:", {
      firstName,
      lastName,
      email,
      phone,
      phoneType,
      office,
      source,
    });

    // Check if we have the API key
    if (!process.env.GHL_API_KEY) {
      console.error("GHL_API_KEY is not defined in environment variables");
      return res.status(500).json({
        success: false,
        message:
          "API key configuration error. Please contact the administrator.",
      });
    }

    // Make the request to GoHighLevel
    const ghlRes = await axios.post(
      "https://rest.gohighlevel.com/v1/contacts/",
      {
        firstName,
        lastName,
        email,
        phone,
        phoneType: phoneType || "mobile",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        tags: [office, source || "Website Contact Form"],
        customField: {
          message: message,
          preferredOffice: office,
          source: source || "Website Contact Form",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GHL_API_KEY}`, // Note: Bearer with space
          "Content-Type": "application/json",
        },
      }
    );

    console.log("GHL response:", ghlRes.data);

    res.status(200).json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (err) {
    console.error("GHL Error:", err?.response?.data || err.message);
    res.status(500).json({
      success: false,
      message:
        "Sorry, there was an error submitting your form. Please try again later.",
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res
    .status(200)
    .json({ status: "Server is running", timestamp: new Date().toISOString() });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Development server running on http://localhost:${PORT}`);
  console.log(`Health check available at http://localhost:${PORT}/api/health`);
});
