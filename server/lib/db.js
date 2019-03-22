import {MongoClient} from 'mongodb';
import logger from './logger';

const db = () => {
    const url = 'mongodb://localhost:27017/watch-with-me';
    const options = {useNewUrlParser: true};

    logger('db', 'Initializing database');

    return MongoClient.connect(url, options);
};

export default db;
