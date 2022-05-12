const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: { type: String, required: true, trim: true, minlength: 3 },
        body: { type: String, required: true, trim: true },
        author: {
            type: String,
            required: true
        },
        authorid: {
            type: String,
            required: true
        },
        date: { type: Date, required: true },
        photo: {
            data: Buffer,
            contentType: String,
          },
          pic:{
            type:String,
            default:"https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
           },
        comments: [{comment:String,postername:String, createdAt:String}]
    },

    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
