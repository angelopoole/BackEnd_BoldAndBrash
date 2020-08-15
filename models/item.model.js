
const mongoose = require("mongoose"); // use mongoose to get schema function

const Schema = mongoose.Schema; // define schema function here

const itemSchema = new Schema(
    {
        // and the schema. remember how you did it in rails. pretty much the same thing.
        name: {
            // attribute name
            type: String, // String type
            required: true, // must be provided
            trim: true
        },
        price: {
            // attribute name
            type: Number, // String type
            required: true // must be provided
        },
        description: {
            // attribute name
            type: Number, // Number type
            required: true // must be provided
        },
        seller: {
            // attribute name
            type: Schema.Types.ObjectId, // Date type
            required: true, // must be provided
            ref: "Seller"
        },
        imageUrl: {
            data: Buffer,
            contentType: String
        },
    },
    {
        timestamps: true, // auto creates fields for when this was modified
    }
);

const item = mongoose.model("item", itemSchema); // this uses mongoose to define it as a schema model

module.exports = item; // export it when we call for this file

// once all schema models are done, work on crud. goto routes folder


// const mongoose = require('mongoose');
// // const { schema } = require('./user.model');
// const Schema = mongoose.Schema;

// const itemSchema = new Schema({
//     itemname: {type: String, required: true, unique: true, trim: true,},
//     price: {type: Integer, required: true}
// },{
//     timestamps: true,
// });

// const Item = mongoose.model('Item', itemSchema);

// module.exports = Item
