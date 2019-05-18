import mongoose from 'mongoose';
import Audience from '../schemas/audience';
import User from '../schemas/user';

mongoose.connect('mongodb://localhost:27017/watch-with-me');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('We\'re connected.'));

const getUser = (username, cb) => {
    User.find({ username: username })
        .exec(cb);
};

const addMedia = (err, data) => {
    if (err) return console.log(err);
    const { user, watchlist, tmdb_id } = data;

    // add media to user's watchlist
    User.updateOne(
        { username: user.username },
        {
            watchlist: watchlist,
        },
        null,
        () => {
            // update audience table
            Audience.findOne(
                {tmdb_id: tmdb_id},
                (err, found) => {
                    if (err) {
                        console.log(err);
                    } else if (found) {
                        found.audience.push(user.username);
                        found.save();
                    } else {
                        const newEntry = new Audience({
                            tmdb_id: tmdb_id,
                            audience: [user.username],
                        });
                        newEntry.save();
                    }
                }
            );
        }
    );
    console.log('watchlist updated in db');
};

const removeMedia = (err, data) => {
    if (err) return console.log(err);
    const { user, watchlist, tmdb_id } = data;

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> user = ', user.username);
    // add media to user's watchlist
    User.updateOne(
        { username: user.username },
        {
            watchlist: watchlist,
        },
        null,
        () => {
            // update audience table
            console.log('>> Must Update Audience <<');
            Audience.findOne(
                {tmdb_id: tmdb_id},
                (err, found) => {
                    if (err) {
                        console.log(err);
                    } else {
                        let index = found.audience
                            .findIndex(username => username === user.username);

                        found.audience.splice(index, 1);
                        console.log('>>>>>><<><><><><><><><> found.audience = ', found.audience);
                        found.save();
                    }
                }
            );
        }
    );
    console.log('item removed from watchlist');
};

/**
 * Register user and password
 *
 * @param {string} err
 * @param {object} data: {username: {String}, password {String}}
 * @returns {function} callback
 */
const registerUser = (err, data, res) => {
    User.findOne({
        username: data.username
    }, (err, dup) => {
        if (err) {
            return console.error(err);
        } else if (dup) {
            return console.log(data.username, ' is already registered.');
        } else {
            const newUser = new User({
                username: data.username,
                password: data.password,
                date_created: new Date(),
                preferences: {},
                friends: [],
                watchlist: [],
            });
            newUser.save()
                .then((user) => {
                    console.log(user.username, ' registered.');
                    res.send(user);
                });
        }
    });
};

const login = (err, data, res) => {
    User.findOne({
        username: data.username,
        password: data.password,
    }, (err, user) => {
        if (err) {
            return console.error(err);
        } else if (!user) {
            return console.log('Incorrect username or password');
        } else {
            user.save()
                .then((user) => {
                    console.log(user.username, ' successfully logged in.');
                    res.send(user);
                });
        }
    });
};

module.exports.getUser = getUser;
module.exports.addMedia = addMedia;
module.exports.removeMedia = removeMedia;
module.exports.registerUser = registerUser;
module.exports.login = login;
