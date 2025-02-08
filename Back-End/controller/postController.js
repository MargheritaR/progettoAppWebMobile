const postModel = require('../modelli/post');

exports.createPost = async (req, res) => {
    const authorEmail = req.user.email;

    const post = {
        ... req.body,
        author : authorEmail
    };

    try{
        await postModel.createPost(post);
        req.status(201).json({ message: 'Post creato con successo' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const result = await postModel.getPosts();
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getPostsByAutore = async (req, res) => {
    const authorEmail = req.user.email;
    try{
        const result= await postModel.getMyPosts(authorEmail);
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};