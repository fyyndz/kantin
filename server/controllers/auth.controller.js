const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/user');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user by email
        const user = await userModel.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ 
                success: false,
                message: 'Authentication failed' 
            });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ 
                success: false,
                message: 'Authentication failed' 
            });
        }

        // Create JWT token
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
};
