const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const axeSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    description: String,
    image: String,
    link: String,
    //publishedDate: String,
    //publisher: String,
    //price: Schema.Types.Decimal128,
    //buyLink: String,
    isbn: String
});

const Axe = mongoose.model("Axe", axeSchema);

module.exports = Axe;
