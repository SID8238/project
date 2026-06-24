const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("./models/user");

dotenv.config();

const seedUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected");

        // Clear existing users
        await User.deleteMany({});
        console.log("Cleared existing users");

        // Hash passwords for student & employee
        const hashedPassword = await bcrypt.hash("password123", 10);

        const users = [
            // Students
            {
                role: "student",
                name: "Siddharth Kumar",
                username: "21BCE1234",
                password: hashedPassword,
                email: "siddharth@vitstudent.ac.in",
            },
            {
                role: "student",
                name: "Rahul Sharma",
                username: "21BCE5678",
                password: hashedPassword,
                email: "rahul@vitstudent.ac.in",
            },

            // Employees
            {
                role: "employee",
                name: "Dr. Anand Raj",
                username: "EMP001",
                password: hashedPassword,
                email: "anand.raj@vit.ac.in",
            },
            {
                role: "employee",
                name: "Prof. Meera Singh",
                username: "EMP002",
                password: hashedPassword,
                email: "meera.singh@vit.ac.in",
            },

            // Parents
            {
                role: "parent",
                name: "Rajesh Kumar",
                regNumber: "21BCE1234",
                dob: "15-03-2003",
                contact: "9876543210",
            },
            {
                role: "parent",
                name: "Suresh Sharma",
                regNumber: "21BCE5678",
                dob: "22-07-2003",
                contact: "9876501234",
            },

            // Alumni
            {
                role: "alumni",
                name: "Priya Verma",
                regNumber: "18BCE9012",
                alumniEmail: "priya.verma@gmail.com",
                dob: "10-11-2000",
            },
            {
                role: "alumni",
                name: "Amit Patel",
                regNumber: "18BCE3456",
                alumniEmail: "amit.patel@gmail.com",
                dob: "05-06-2000",
            },
        ];

        await User.insertMany(users);
        console.log(`\nSeeded ${users.length} users successfully!\n`);

        console.log("========= TEST CREDENTIALS =========\n");
        console.log("STUDENT LOGIN:");
        console.log("  Username: 21BCE1234    Password: password123");
        console.log("  Username: 21BCE5678    Password: password123\n");
        console.log("EMPLOYEE LOGIN:");
        console.log("  Username: EMP001       Password: password123");
        console.log("  Username: EMP002       Password: password123\n");
        console.log("PARENT LOGIN:");
        console.log("  RegNumber: 21BCE1234   DOB: 15-03-2003   Contact: 9876543210");
        console.log("  RegNumber: 21BCE5678   DOB: 22-07-2003   Contact: 9876501234\n");
        console.log("ALUMNI LOGIN:");
        console.log("  RegNumber: 18BCE9012   Email: priya.verma@gmail.com   DOB: 10-11-2000");
        console.log("  RegNumber: 18BCE3456   Email: amit.patel@gmail.com    DOB: 05-06-2000\n");
        console.log("====================================");

    } catch (err) {
        console.error("Seeding failed:", err.message);
    } finally {
        await mongoose.connection.close();
        console.log("\nDatabase connection closed.");
    }
};

seedUsers();
