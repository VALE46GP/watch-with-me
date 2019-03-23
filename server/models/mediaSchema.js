const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
    title: String,
    withwhom: [String],
});

const Media = mongoose.model('Media', mediaSchema);


export default Media;
