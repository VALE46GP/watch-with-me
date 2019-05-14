/**
 * create a hash to securely store verification of password
 *
 * @param {string} password
 * @returns {string} hash
 */
export const hash = (password) => {
    let hash = 0;
    for (let i = 0, len = password.length; i < len; i += 1) {
        hash = (hash << 5) + hash + password.charCodeAt(i);
        hash = hash & hash;
        hash = Math.abs(hash);
    }
};
