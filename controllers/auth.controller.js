const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { db } = require('../config/prismaClient');
require('dotenv').config()

async function login(req, res) {
    try {
        const { email, password } = req.body;

        const user = await db.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Authentication failed'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Authentication failed'
            });
        }

        const token = jwt.sign(
            {
                userId: user.userID,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            success: true,
            token,
            role: user.role,
            userId: user.userID
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function register(req, res) {
    try {
        const { email, password, role } = req.body;

        const existingUser = await db.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await db.user.create({
            data: {
                email,
                password: hashedPassword,
                role
            }
        });

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            userId: newUser.userID,
            role: newUser.role
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
  login, register
}
