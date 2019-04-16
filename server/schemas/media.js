const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
    title: String,
    audience: [String],
    data: Object,
});

const Media = mongoose.model('Media', mediaSchema);


export default Media;
