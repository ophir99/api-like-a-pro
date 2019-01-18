const post = require("./../model/posts");

exports.getAllPosts = (req, res) => {
  post
    .find()
    .then(result => {
      res.send({ response: result });
    })
    .catch(err => {
      res.status(500).send({ response: err });
    });
};

exports.createPost = (req, res) => {
  const newPost = new post({
    title: req.body.title,
    desc: req.body.desc,
    hashtags: req.body.hashtags
  });

  newPost
    .save()
    .then(result => {
      res.send({ response: result });
    })
    .catch(err => {
      res.status(500).send({ response: err });
    });
};

exports.updatePost = (req, res) => {
  post
    .update(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          desc: req.body.desc,
          hashtags: req.body.hashtags
        }
      }
    )
    .then(result => {
      res.send({ response: result });
    })
    .catch(err => {
      res.status(500).send({ response: err });
    });
};

exports.deletePost = (req, res) => {
  post
    .deleteOne({ _id: req.params.id })
    .then(result => res.send({ response: result }))
    .catch(err => res.status(500).send({ response: err }));
};
