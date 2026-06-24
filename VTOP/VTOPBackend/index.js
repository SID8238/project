const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log(`Database Connected`);
})
.catch((error) => {
    console.error(`Error while loading the database`,error);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running successfully on ${PORT}`);
});