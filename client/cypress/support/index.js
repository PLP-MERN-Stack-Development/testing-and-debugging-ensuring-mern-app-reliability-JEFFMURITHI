// load commands and snapshot plugin
require('./commands');

// If using cypress-image-snapshot:
const { addMatchImageSnapshotCommand } = require('cypress-image-snapshot/command');
addMatchImageSnapshotCommand();
