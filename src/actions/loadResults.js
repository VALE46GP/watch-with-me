import * as constants from "../constants/results";

const loadResults = results => ({
    type: constants.LOAD_RESULTS,
    results,
});

export default loadResults;
