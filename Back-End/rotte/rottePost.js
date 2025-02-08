const express = require('express');
const { createPost, getPosts, getPostsByAutore } = require('../controller/postController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/post', authenticateToken, createPost);
router.get('/all-posts', getPosts);
router.get('/posts', authenticateToken, getPostsByAutore);

module.exports = router;