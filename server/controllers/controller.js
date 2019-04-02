import 'babel-polyfill';
import model from '.....';
import sanatize from 'sanatize-html';

const controller = db => ({
    create: async (body = {}, user = {}) => {
        if (!body.description) throw new Error(message: 'Missing build note description');

        const Instance = model(db);
        return await Instance.create(sanatize(body.description), body.buildID, user.dsid, user.firstName);
    },
    /**
     * Delete a note
     *
     * @returns {Promise<*>>}
     */
    delete: async (test) => {
            const Instance = model(db);
            return await Instance.delete(test.id);
    },
    get:
    list:
    update:
});

export default controller;
