import data from "../models/watchlist";
import logger from "../lib/logger";

const api = (app, db) => {
    app.get('/watchlist', (req, res) => {
        console.log('here');
        data.getAll((err, results) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                logger('db', err || 'GET watchlist successful');
                res.send({results});
            }
        });
    });

    app.post('/watchlist', (req, res) => {
        data.save(null, req.body);
        logger('db', err || 'POST successful: ', req.body);
        res.sendStatus(201);
    });
};

export default api;
