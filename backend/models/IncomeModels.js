const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  amount: {
    type: Number,
    required: true,
    trim: true
  },
  type: {
    type: String,
    default: "income"
  },
  date: {
    type: Date,  // Changed to Date type for better date handling
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    maxLength: 20,
    trim: true
  },
  description: {
    type: String,
    required: true,
    maxLength: 200,  // Changed to 200 for a more reasonable description length
    trim: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Income', IncomeSchema);
