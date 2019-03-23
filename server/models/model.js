const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/watch-with-me');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('We\'re connected.'));

const mediaSchema = new mongoose.Schema({
    title: String,
    withwhom: [String],
});
const Media = mongoose.model('Media', mediaSchema);

const getAll = (cb) => {
    Media.find()
    .limit(25)
    .exec(cb);
};

const save = (err, data) => {
    const newEntry = new Media(data);
    if (err) {
        return console.error(err);
    } else {
        newEntry.save(err => {
            if (err) return console.error(err);
        });
        console.log('Data successfully saved');
    }
};

module.exports.save = save;
module.exports.getAll = getAll;
