const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const BooksShema = new Schema({
    title: {
        type: String,
        required: true
    },aurthors: [
        {
            author: {
                type: String,
                require: true
            }
        }
    ],description: {
        type: String
    },image: {
        type: String
    },link: {
        type: String
    }
});

module.exports = User = moongoose.model("books", BooksSchema)