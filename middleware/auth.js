const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Invalid token.' });
    }
}

function authorize(role) {
    return (req, res, next) => {
        if (!req.user || req.user.role !== role) {
            return res.status(403).json({ success: false, message: 'Forbidden. You do not have permission.' });
        }
        next();
    };
}

module.exports = { authenticate, authorize };
