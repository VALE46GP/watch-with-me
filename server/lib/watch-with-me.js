import {MongoClient} from 'mongodb';
import logger from './logger';

const watchWithMe = () => {
    const url = 'mongodb://localhost:27017/watch-with-me';
    const options = { useNewUrlParser: true };

    logger('watchWithMe', 'Initializing database');

    return MongoClient.connect(url, options);
};

export default watchWithMe;
