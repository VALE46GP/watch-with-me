const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    friends: [String],
    watchlist: [String],
});

const User = mongoose.model('User', userSchema);

export default User;
