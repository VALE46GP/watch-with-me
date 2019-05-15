const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    date_created: Date,
    preferences: Object,
    friends: [String],
    watchlist: [String],
});

const User = mongoose.model('User', userSchema);

export default User;
