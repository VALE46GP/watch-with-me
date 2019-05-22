const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    image: Object,
    preferences: Object,
    friends: [String],
    watchlist: [Object],
});

const User = mongoose.model('User', userSchema);

export default User;
