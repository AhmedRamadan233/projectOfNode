

const mongoose=require("mongoose");

const bookSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    publishingDate: { type: Date },
    category: { type: String },
    edition: { type: String },
    pages: { type: Number },
    noOfCopies: { type: Number },
    available: { type: Number },
    shelfNo: { type: String },
  });

mongoose.model("books",bookSchema);
