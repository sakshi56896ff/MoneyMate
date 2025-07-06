const axios = require('axios');
require('dotenv').config(); // Ensure this is included to read .env

const API_KEY = process.env.GEMINI_API_KEY; // Read from .env

const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

const generateContent = async (prompt) => {
    try {
        const response = await axios.post(BASE_URL, {
            contents: [
                {
                    parts: [
                        { text: prompt }
                    ]
                }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error communicating with Gemini API:', error.response ? error.response.data : error.message);
        throw error;
    }
};

module.exports = { generateContent };




