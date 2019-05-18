const mongoose = require('mongoose');

const audienceSchema = mongoose.Schema({
    tmdb_id: String,
    audience: [String],
});

const Audience = mongoose.model('Audience', audienceSchema);

export default Audience;
