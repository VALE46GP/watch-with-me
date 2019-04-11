import mongoose from 'mongoose';
import Media from '../schemas/media';

mongoose.connect('mongodb://localhost:27017/watch-with-me');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('We\'re connected.'));

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

const deleteMedia = (err, criteria) => {
    if (err) {
        return console.error(err);
    } else {
        Media.deleteOne(criteria, err => {
           if (err) console.error(err);
        });
    }
};

module.exports.save = save;
module.exports.getAll = getAll;
module.exports.deleteMedia = deleteMedia;
