const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hey i am ouwners router');
});

module.exports = router;