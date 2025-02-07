const sql = require('../configurazioni/dbConf');

const createPost = async (post) => {
    const query = `INSERT INTO Posts (title, author, category, body) VALUES (@title, @author, @category, @body)`;
    const request = new sql.Request();
    request.input('title', sql.VarChar, post.title);
    request.input('author', sql.VarChar, post.author);
    request.input('category', sql.VarChar, post.category);
    request.input('body', sql.VarChar, post.body);

    try {
        const result = await request.query(query);
        return result;
    } catch (err) {
        console.error('Errore nella creazione del post:', err);
        throw err;
    }
};

const getPosts = async () => {
    const query = `SELECT * FROM Posts`;
    const request = new sql.Request();

    try {
        const result = await request.query(query);
        return result;
    } catch (err) {
        console.error('Errore nel recupero dei post:', err);
        throw err;
    }
};

const getMyPosts = async (author) => {
    const query = `SELECT * FROM Posts WHERE author = @author`;
    const request = new sql.Request();
    request.input('author', sql.VarChar, author);

    try {
        const result = await request.query(query);
        return result;
    } catch (err) {
        console.error('Errore nel recupero dei post:', err);
        throw err;
    }
}

module.exports = {
    createPost,
    getPosts,
    getMyPosts
};
