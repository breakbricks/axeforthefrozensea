const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const axeSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    image: String,
    description: String,
    link: String,

});

const Axe = mongoose.model("Axe", axeSchema);

module.exports = Axe;
