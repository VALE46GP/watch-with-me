const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
    audience: [String],
    date_added: Date,
    data: Object,
    vote_count: Number,
    id: Number,
    video: Boolean,
    vote_average: Number,
    title: String,
    popularity: Number,
    poster_path: String,
    original_language: String,
    original_title: String,
    genre_ids: [Number],
    backdrop_path: String,
    adult: Boolean,
    overview: String,
    release_date: String,
});

const Media = mongoose.model('Media', mediaSchema);

export default Media;
