// Simple Express server to proxy Anthropic API requests
// This is needed because Anthropic API doesn't support CORS (direct browser calls)

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Afaan API server is running' });
});

// Proxy endpoint for Anthropic API
app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const apiKey = process.env.VITE_ANTHROPIC_API_KEY;

    if (!apiKey) {
      console.error('API key not found in environment');
      return res.status(500).json({
        error: 'API key not configured on server',
        details: 'Please ensure VITE_ANTHROPIC_API_KEY is set in .env file'
      });
    }

    console.log(`[${new Date().toISOString()}] Processing chat request...`);
    console.log('API Key present:', apiKey ? 'Yes' : 'No');

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Anthropic API Error:', data);
      const errorMessage = data.error?.message || 'Unknown error';
      return res.status(response.status).json({
        error: 'Anthropic API Error',
        details: errorMessage,
        message: errorMessage, // Add this so frontend can easily check
        status: response.status
      });
    }

    console.log(`[${new Date().toISOString()}] Chat request successful`);

    // Return the response
    res.json(data);

  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 Afaan API Server running on http://localhost:${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
  console.log(`💬 Chat endpoint: http://localhost:${PORT}/api/chat\n`);
});
