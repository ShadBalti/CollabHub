const express = require('express');
const router = express.Router();

router.post('/update', (req, res) => {
    const { content } = req.body;
    io.emit('updateDocument', content);
    res.sendStatus(200);
});

module.exports = router;
