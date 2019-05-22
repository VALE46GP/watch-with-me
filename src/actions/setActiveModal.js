import * as constants from '../constants/results';

/**
 * set user (used on login)
 *
 * @param {string} activeModal
 * @returns {object} action
 */
const setActiveModal = activeModal => ({
    type: constants.SET_ACTIVE_MODAL,
    activeModal,
});

export default setActiveModal;
