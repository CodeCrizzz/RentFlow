const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {
    signup: async (req, res) => {
        const { username, email, password, role } = req.body;
        try {
            // Check if user exists
            const [existingUser] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
            if (existingUser.length > 0) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Insert user
            await pool.execute(
                'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
                [username, email, hashedPassword, role || 'tenant']
            );

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error during signup' });
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const [users] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
            if (users.length === 0) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const user = users[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            // Generate JWT
            const payload = { id: user.id, role: user.role };
            const token = jwt.sign(payload, process.env.JWT_SECRET || 'rentflow_secret_key_2024', { expiresIn: '1h' });

            res.json({
                token,
                user: { id: user.id, username: user.username, role: user.role }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error during login' });
        }
    }
};

module.exports = authController;
