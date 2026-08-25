# MoneyMate 💰

A full-stack personal finance tracker built with the MERN stack, featuring an
in-app AI assistant powered by Google's Gemini API.

⚙️ **API:** https://reearthfrontend.netlify.app/

---

## Features

- 🔐 User registration and login with bcrypt-hashed passwords
- 💵 Income and expense logging across 8 categories (Education, Groceries,
  Health, Subscriptions, Takeaways, Clothing, Travelling, Other)
- 📊 Interactive dashboard (Chart.js) visualizing income vs. expense trends
- 📈 Running balance, and min/max income & expense summaries
- 🕒 Recent transaction history at a glance
- 🤖 In-app AI chat assistant (Gemini 1.5 Flash) for natural-language
  questions about your finances, with Markdown-formatted responses
- 🎨 Responsive UI built with styled-components and React Router

## Tech Stack

**Frontend:** React.js, React Router, styled-components, Chart.js
(react-chartjs-2), Axios, React Markdown, React Datepicker

**Backend:** Node.js, Express.js, MongoDB, Mongoose, bcryptjs

**AI:** Google Gemini API (gemini-1.5-flash)

**Deployment:** Render (backend), [Vercel / Netlify — fill in] (frontend)

## Getting Started

### Prerequisites

- Node.js v16+
- A MongoDB Atlas cluster (or local MongoDB instance)
- A Gemini API key ([Google AI Studio](https://aistudio.google.com/))

### Installation

```bash
git clone https://github.com/sakshi56896ff/MoneyMate.git
cd MoneyMate
```

**Backend setup**

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```
PORT=5000
MONGO_URL=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

```bash
npm start
```

**Frontend setup** (in a separate terminal)

```bash
cd frontend
npm install
npm start
```

The app will be available at `http://localhost:3000`, talking to the API on
`http://localhost:5000`.

## API Endpoints

| Method | Endpoint                       | Description                  |
|--------|---------------------------------|-------------------------------|
| POST   | `/api/v1/register`              | Register a new user           |
| POST   | `/api/v1/login`                 | Authenticate a user           |
| GET    | `/api/v1/get-incomes`           | Fetch all income records      |
| POST   | `/api/v1/add-income`            | Add an income record          |
| DELETE | `/api/v1/delete-income/:id`     | Delete an income record       |
| GET    | `/api/v1/get-expenses`          | Fetch all expense records     |
| POST   | `/api/v1/add-expense`           | Add an expense record         |
| DELETE | `/api/v1/delete-expense/:id`    | Delete an expense record      |
| POST   | `/api/v1/chat`                  | Ask the Gemini-powered assistant a question |

## Project Structure

```
EXPENSE-TRACKER/
├── backend/
│   ├── controllers/     # Route handlers (auth, income, expense, chat)
│   ├── models/          # Mongoose schemas (User, Income, Expense)
│   ├── routes/          # Express routers
│   ├── db/               # MongoDB connection
│   ├── geminiConfig.js   # Gemini API client
│   └── app.js            # Express app entry point
└── frontend/
    └── src/
        ├── components/    # Dashboard, Chart, Chat, Income, Expenses, etc.
        ├── context/       # Global state (GlobalContext)
        ├── style/         # Global styles and layout
        └── utils/         # Icons, date formatting, helpers
```

## Roadmap

- [ ] JWT-based session authentication
- [ ] Category-level spending breakdown chart
- [ ] Recurring transaction support

## Author

[Your Name] — [GitHub](https://github.com/sakshi56896ff)
