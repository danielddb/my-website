const { createPages } = require('./lib/bootup/create-pages');
const { onCreateNode } = require('./lib/bootup/on-create-node');

/** @type { import("gatsby").GatsbyNode } */
const config = {};
exports.config = config;

config.createPages = createPages;
config.onCreateNode = onCreateNode;

module.exports = config;
