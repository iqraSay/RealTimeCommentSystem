const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
require("dotenv").config();
const debug = require("debug")("app");
const authRoutes = require('./routes/authRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    debug("Database connection error:", err);
    throw err;
  }
  debug("Connected to MySQL database");
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes(io, db)); 

// Socket.IO connection
io.on("connection", (socket) => {
  debug("User connected:", socket.id);
  socket.on("disconnect", () => {
    debug("User disconnected:", socket.id);
  });
});

// Start the server
const PORT = 5000;
server.listen(PORT, () => {
  debug(`Server running on http://localhost:${PORT}`);
});
