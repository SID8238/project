const express = require("express");
const cors  = require("cors");
const pool = require("./src/config/db")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.send("Welcome to SurgePay API!");
});

app.get('/api/health/db', async (req,res) => {
    try{
        const result  = await pool.query("SELECT NOW() AS current_time");

        res.json({
            success: true,
            message: "PostgreSQL connected successfully",
            databaseTime: result.rows[0].current_time,
        });
    } catch(error) {
        console.error("Database connection failed: ",error.message);

        res.status(503).json({
            success: false,
            message: "Database connection unavailable",
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`SurgePay server running on port ${PORT}`);
});