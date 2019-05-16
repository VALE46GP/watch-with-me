const mongoose = require('mongoose');

const audienceSchema = mongoose.Schema({
    watchlist_id: String,
    audience: [String],
});

const Audience = mongoose.model('Audience', audienceSchema);

export default Audience;
