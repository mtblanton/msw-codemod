const { setupServer } = require("msw/node");
const { handlers } = require("./handlers");

// Setup requests interception using the given handlers.
const server = setupServer(...handlers);

module.exports = { server };
