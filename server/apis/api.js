import watchlist from './watchlist';

export default (app, db) => {
    app.use('/watchlist', watchlist.bind(this, app, db));
};
