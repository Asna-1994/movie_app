🎬 Movie Search & Favorites - MERN App
A full-stack application that allows users to search for movies using the OMDB API and save their favorites. Built with the MERN stack (minus MongoDB, using in-memory storage instead).
🚀 Live Demo

Frontend: https://movie-app-eight-iota-37.vercel.app
Backend: https://movie-app-pdlj.onrender.com/api/movies

📌 Features

Search for movies using the OMDB API
Add & Remove movies from favorites
Debounced search to reduce API calls while typing
Server-side storage for favorites (no login required)
Responsive UI built with React and Tailwind CSS
Clean and intuitive user interface

🛠️ Tech Stack

Frontend:

React
Tailwind CSS
Axios for API requests
React Icons


Backend:

Node.js
Express
TypeScript
In-memory storage


Deployment:

Backend: Render
Frontend: Vercel



🚀 Installation & Setup
1️⃣ Clone the Repository
shCopygit clone https://github.com/your-username/movie-search-app.git
cd movie-search-app
2️⃣ Setup Backend
shCopycd backend
npm install
cp .env.example .env  # Add your OMDB API key
npm run build
npm start
Backend runs on http://localhost:3000
3️⃣ Setup Frontend
shCopycd frontend
npm install
cp .env.example .env  # Add backend URL
npm start
Frontend runs on http://localhost:5173
🌟 Implementation Details
Backend

Implemented RESTful API endpoints:

/api/movies/search: Forwards search queries to OMDB API
/api/movies/favorites: Manages user favorites


Used in-memory storage for favorites
Implemented proper error handling and validation
Added TypeScript for type safety

Frontend

Created a responsive UI with React and Tailwind CSS
Implemented debounced search to minimize API calls
Used heart icons to add/remove favorites
Added loading states for better user experience

🔜 Future Improvements

Add user authentication for personalized favorites
Replace in-memory storage with MongoDB
Implement pagination for search results
Add unit and integration tests
Add offline support with local storage
Implement additional filtering options

🤝 Contributing
Contributions, issues, and feature requests are welcome!

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request


📞 Contact
Asna VT - saydathasna@gmail.com
Project Link : https://github.com/Asna-1994/movie_app

🎉 Done!
This project was completed as a take-home assignment for Velozity, demonstrating MERN stack development skills.






