const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

router.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        console.log('Sending request to Gemini API');
        const response = await axios.post(GEMINI_API_URL, {
            contents: [
                {
                    parts: [
                        { text: userMessage }
                    ]
                }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                key: process.env.GEMINI_API_KEY
            }
        });

        // Log the full response data to understand its structure
        console.log('Received response from Gemini API:', response.data);

        // Safeguard against undefined properties and extract text
        const candidates = response.data.candidates;
        if (candidates && candidates.length > 0) {
            const parts = candidates[0].content.parts;
            if (parts && parts.length > 0) {
                const aiMessage = parts[0].text;
                return res.json({ response: aiMessage });
            } else {
                return res.status(500).json({ error: 'No parts found in content' });
            }
        } else {
            return res.status(500).json({ error: 'No candidates found in response' });
        }
    } catch (error) {
        console.error('Error communicating with Gemini API:', error);
        res.status(500).json({ error: 'Error processing request' });
    }
});

module.exports = router;

// c:\Users\saksh\Desktop\EXPENSE-TRACKER\backend\app.js
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const chatRoutes = require('./routes/chatRoutes');
// const incomeRoutes = require('./routes/incomeRoutes');
// const expenseRoutes = require('./routes/expenseRoutes');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// app.use('/api/v1/chat', chatRoutes);
// app.use('/api/v1', incomeRoutes);
// app.use('/api/v1', expenseRoutes);

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });







