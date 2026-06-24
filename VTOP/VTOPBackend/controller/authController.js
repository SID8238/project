const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
};

exports.loginStudent = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username, role: 'student' });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Username' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        const token = generateToken(user);

        res.json({
            token,
            user: {
                _id: user._id,
                username: user.username,
                role: user.role
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.loginEmployee = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username, role: 'employee' });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Username' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        const token = generateToken(user);

        res.json({
            token,
            user: {
                _id: user._id,
                username: user.username,
                role: user.role
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.loginParent = async (req, res) => {
    try {
        const { regNumber, dob, contact } = req.body;

        const user = await User.findOne({ regNumber, dob, contact, role: 'parent' });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user);

        res.json({
            token,
            user: {
                _id: user._id,
                regNumber: user.regNumber,
                role: user.role
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.loginAlumni = async (req, res) => {
    try {
        const { regNumber, alumniEmail, dob } = req.body;

        const user = await User.findOne({ regNumber, alumniEmail, dob, role: 'alumni' });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user);

        res.json({
            token,
            user: {
                _id: user._id,
                regNumber: user.regNumber,
                alumniEmail: user.alumniEmail,
                role: user.role
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};