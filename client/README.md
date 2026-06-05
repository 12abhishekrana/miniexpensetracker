📊 Expense Tracker App (MERN + React)

A modern, responsive Expense Tracker Web App built using React that helps users track, manage, and analyze their daily expenses with a clean dashboard UI.

🚀 Features
➕ Add expenses (amount, category, date, note)
✏️ Edit existing expenses
❌ Delete expenses
📊 Real-time summary dashboard
📈 Expense charts (category-wise visualization)
🔍 Filter expenses by category
💾 Backend API integration (Node + Express + MongoDB)
🎨 Modern dark UI with glassmorphism design
⚡ Fast and responsive UI
🖥️ UI Preview

Clean dashboard with:

Summary cards (Total spent, highest expense, total transactions)
Expense form (Add/Edit)
Chart visualization
Expense history table
🛠️ Tech Stack
Frontend
React.js
JavaScript (ES6+)
Axios
CSS (Custom styling / Glassmorphism UI)
Backend (Assumed)
Node.js
Express.js
MongoDB
Mongoose
📁 Project Structure
expense-tracker/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── SummaryCards.jsx
│   │   │   ├── FilterBar.jsx
│   │   │   ├── ExpenseForm.jsx
│   │   │   ├── ExpenseTable.jsx
│   │   │   ├── ExpenseChart.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │
│   ├── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/expense-tracker.git
2️⃣ Install Frontend Dependencies
cd client
npm install
3️⃣ Install Backend Dependencies
cd server
npm install
4️⃣ Setup Environment Variables

Create .env in server folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000
5️⃣ Run Backend Server
cd server
npm start
6️⃣ Run Frontend
cd client
npm run dev
🌐 API Endpoints
Method	Endpoint	Description
GET	/api/expenses	Get all expenses
POST	/api/expenses	Add new expense
PUT	/api/expenses/:id	Update expense
DELETE	/api/expenses/:id	Delete expense
📊 Future Improvements
🔐 User authentication (Login/Register)
📁 Export data as CSV / PDF
📊 Advanced analytics dashboard
🌙 Dark/Light mode toggle
📱 Fully mobile responsive UI
🔔 Notifications for overspending alerts
🧠 Learning Outcome

This project helps in understanding:

React state management
CRUD operations with API
Component-based architecture
Backend integration (REST API)
UI/UX design principles
Data visualization concepts

👨‍💻 Author
Abhishek Rana
GitHub: https://github.com/12abhishekrana
LinkedIn: https://www.linkedin.com/in/abhishek-rana-5a0799375/


⭐ Show Your Support
If you like this project:

⭐ Star the repo
🍴 Fork it
🚀 Share it