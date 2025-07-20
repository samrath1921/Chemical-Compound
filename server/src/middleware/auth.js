const jwt = require('jsonwebtoken');
// const token = jwt.sign({ username: 'admin' }, 'jwt_secret', { expiresIn: '100y' });
// console.log('Generated Token:', token);
// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzUzMDIxNzg0LCJleHAiOjQ5MDg3ODE3ODR9.KPTbV4VUfJdKBDnoZaFqO_Rp_3YSZcQVF8vrKwW31PM

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) return res.status(401).send('Access denied. No token provided.');

    const token = authHeader.split(' ')[1];

    if (!token) return res.status(401).send('Access denied. Invalid token.');

    try {
        const decoded = jwt.verify(token,'jwt_secret');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).send('Invalid token.');
    }
};

module.exports = auth;