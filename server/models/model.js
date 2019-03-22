const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/watch-with-me');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    const mediaSchema = new mongoose.Schema({
        title: String,
        withwhom: [String],
    });
    const Media = mongoose.model('Media', mediaSchema);
    const pootieTang = new Media({
        title: 'Pootie Tang',
        withwhom: ['Guillermo'],
    });

    pootieTang.save((err, pootieTang) => {
        if (err) return console.error(err);
        console.log('Pootie Tang successfully saved');
    });
});
