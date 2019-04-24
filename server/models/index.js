import mongoose from 'mongoose';
import Media from '../schemas/media';
import User from '../schemas/user';

mongoose.connect('mongodb://localhost:27017/watch-with-me');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('We\'re connected.'));

const getAll = (cb) => {
    Media.find()
    .limit(25)
    .exec(cb);
};

const addMedia = (err, data) => {
    const newEntry = new Media(data);
    Media.findOne({id: data.id}, (err, dup) => {
        if (err) {
            return console.error(err);
        } else if (dup) {
            return console.log(data.title, ' is already in watchlist');
        } else {
            newEntry.save(err => {
                if (err) return console.error(err);
            });
            console.log(data.title, ' saved to db');
        }
    });
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

const addUser = (err, data) => {
    const newUser = new User(data);
    if (err) {
        return console.error(err);
    } else {
        newUser.save(err => {
            if (err) return console.error(err);
        });
        console.log('User successfully saved');
    }
};

module.exports.addMedia = addMedia;
module.exports.getAll = getAll;
module.exports.deleteMedia = deleteMedia;
module.exports.addUser = addUser;
