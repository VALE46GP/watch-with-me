import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import cors from 'cors';
import handle from './lib/db';
import data from './models/model';
import logger from './lib/logger';
import http from "http";

const app = express();
const port = process.env.PORT || 8080;
const index = http.Server(app);

handle().then((db, err) => {
    logger('db', err || 'Database successfully initialized');

    app.use(express.static(path.join(__dirname, '/../build')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());

    app.get('*', (req, res) => {
        console.log(`sendFile: ${path.join(__dirname, '/../build', 'index.html')}`);
        res.sendFile(path.join(__dirname, '/../build', 'index.html'));
    });

    // app.get('/watchlist', (req, res) => {
    //     data.getAll((err, results) => {
    //         if (err) {
    //             res.status(500).send(err.message);
    //         } else {
    //             logger('db', err || 'GET watchlist successful');
    //             res.send({results});
    //         }
    //     });
    // });

    app.post('/watchlist', (req, res) => {
        console.log('req.body>>>>>>>>>>>>>>>>>', req.body);
        data.save(null, req.body);
        logger('db', err || 'POST successful: ', req.body);
        res.sendStatus(201);
    });

    index.listen(port, () => {
        console.log('listening on port ', port);
    });
});
