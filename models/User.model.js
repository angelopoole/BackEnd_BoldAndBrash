const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        uniqure: true,
        trim: true,
        minLength: 5
    },
    cart: {
        type: Array,
        required: false
    }
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;