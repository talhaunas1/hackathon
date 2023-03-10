import Post from "../schemas/Posts.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.aggregate([{ $sample: { size: 20 } }]);
    res.json(posts);
  } catch (error) {
    res.send(error);
  }
};

export const addPosts = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    res.send(error);
  }
};
