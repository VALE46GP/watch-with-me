class Crud {
    constructor(collection, { db, resultKey = 'result', queryKey = 'id' } = {}) {
        this.collection = collection;
        this.queryKey = queryKey;
        this.resultKey = resultKey;
    }

    findOne = () => (req, res, next) => {
        this.collection.findOne({ [this.queryKey]: req.params[this.queryKey] }).then(doc => {
            req[this.resultKey] = doc;
            next();
        }).catch(next);
    }

    find = () => (req, res, next) => {
        this.collection.find().then(docs => {
            req[this.resultKey] = docs;
            next();
        }).catch(next);
    }

    create = () => (req, res, next) => {
        const c = new this.collection(req.body);
        c.save().then(doc => {
            req[this.resultKey] = doc;
            next();
        }).catch(next);
    }

    update = () => (req, res, next) => {
        this.collection.findAndModify({
            query: { [this.queryKey]: req.params[this.queryKey] },
            update: { $set: req.body },
            new: true
        }).then(doc => {
            req[this.resultKey] = doc;
            next();
        }).catch(next);
    }
}

module.exports = Crud;
