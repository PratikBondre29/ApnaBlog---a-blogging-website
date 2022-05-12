const router = require("express").Router();
let Post = require("../models/post.model");
const fs = require("fs");

const formidable = require("formidable");


router.param("postId",  (req, res, next, id) => {
    Post.findById(id)
      .exec((err, post) => {
        if (err) {
          return res.status(400).json({
            error: "Post not found",
          });
        }
        req.post = post;
        next();
      });
  });


// Root route
router.route("/").get((req, res) => {
    Post.find()
        .then((posts) => {
          // console.log(posts)
          res.json(posts)
        })
        .catch((err) => res.status(400).json("Error: " + err));
});


//Route to add a new post
router.route("/create").post((req, res) => {
    //Retrieve data for post
    // const { title, body, author } = req.body;
    // const date = Date.parse(req.body.date);

    // console.log(req);
    console.log("******************************** from create");
    console.log(req.body)
    console.log("******************************** from create");

    // testing code
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
          return res.status(400).json({
            error: "problem with image",
          });
        }

        const { title, body, author, date,pic,authorid } = fields;
    if (!title || !body || !author || !date || !pic || !authorid) {
      return res.status(400).json({
        error: "please include all fields",
      });
    }
         // testing code

    const comments = [];

    //Create a new Post and save it to DB
    const newPost = new Post({
        title,
        body,
        author,
        date,
        comments,
        pic,
        authorid
    });

    console.log(newPost)
    console.log("%%%%%%%%%%%%")
    console.log(file)
    console.log("^^^^^^^^^^^")
// **********
    if (file.myFile) {
        if (file.myFile.size > 3000000) {
          return res.status(400).json({
            error: "file size too large",
          });
        }
        newPost.photo.data = fs.readFileSync(file.myFile.path);
        newPost.photo.contentType = file.myFile.type;
      }
    //   **********

    console.log("post added successfully",newPost)
    // Save the new post
    newPost
        .save()
        .then(() => res.json("Post Added!"))
        .catch((err) => {
                console.log(err);
                res.status(400).json("Error: " + err)
        });




      });



});

//route to display a particular post
router.route("/:id").get((req, res) => {
    Post.findById(req.params.id)
        .then((post) => res.json(post))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Route to edit a particular post
router.route("/edit/:id").post((req, res) => {
  console.log("here comes a test")
    Post.findById(req.params.id)
        .then((post) => {
            post.title = req.body.title;
            post.body = req.body.body;
            post.author = req.body.author;
            post.date = Date.parse(req.body.date);
            post.comments = req.body.comments;

            post.save()
                .then(() => res.json("Post Edited"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

// Route to Delete a route
router.route("/deletepost/:id").delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json("Post Deleted"))
        .catch((err) => res.status(400).json("Error: " + err));
});



router.route("/photo/:postId").get((req, res) => {
    console.log(req)
    const imagData = 'data:image/jpeg;base64,' + btoa(req.post.photo.data);
    console.log(imagData)
      if (req.post.photo.data) {
        res.set("Content-Type", req.post.photo.contentType);
        return res.send(req.post.photo.data);
      }
});


//add comment

router.route("/editcomm/:id").post((req, res) => {
  Post.findById(req.body.id)
      .then((post) => {
        console.log(req.body)
          post.comments.push({comment:req.body.comm,postername:req.body.postername, createdAt: req.body.createdAt});

          post.save()
              .then(() => res.json("comment added"))
              .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
});






module.exports = router;
