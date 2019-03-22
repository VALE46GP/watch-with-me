/**
 * Wrap the console log function
 * Turns off logging in production
 *
 * @param {string} module - The module that is calling this
 * @param {string} message - The message to log
 * @param {boolean} production - Show the message in production too
 */
const logger = (module, message, production=false) => {
    console.log(`${module.toUpperCase()} :: ${message}`);
};

export default logger;
