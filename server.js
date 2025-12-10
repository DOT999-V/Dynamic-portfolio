// server.js - beginner friendly
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Your data
const portfolio = {
  name: "Vishal Rajamanickam",
  roll: "ME25B140",
  about:  `This is Vishal (ME25B140). I’ve developed a strong passion for technology, 
            particularly in the field of web operations and programming. My interest in trading 
            introduced me to the world of blockchain and cryptocurrencies, which further deepened 
            my fascination with emerging digital infrastructure and ideas. I believe that being part 
            of a community with like-minded peers and people with real experience would help me 
            expand my knowledge as well as contribute meaningfully.`,
  hobbies: ["Anime", "Badminton", "Cricket", "Exploring the internet", "Learning new tech"],
  aspirations: [
    "Be skilled in WebOps",
    "Learn blockchain practically",
    "Build cool projects",
    "Grow via teamwork"
  ]
};

// API endpoint
app.get("/api/portfolio", function(req, res) {
  res.status(200).json(portfolio);
});

// Start the server
app.listen(PORT, function() {
  console.log("Server running at http://127.0.0.1:" + PORT);
});
