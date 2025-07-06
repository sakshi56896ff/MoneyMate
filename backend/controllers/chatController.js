const { generateContent } = require('../geminiConfig'); // Adjust the path as needed

exports.askQuestion = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ message: 'Prompt is required' });
        }
        const response = await generateContent(prompt);
        res.json(response);
    } catch (error) {
        console.error('Error communicating with Gemini API:', error.message);
        res.status(500).json({ message: 'Error communicating with Gemini API' });
    }
};











