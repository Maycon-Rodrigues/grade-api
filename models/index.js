const mongoose = require('mongoose');

require('dotenv/config');

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

module.exports = { db };
