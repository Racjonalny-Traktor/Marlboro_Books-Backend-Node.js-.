const mongoose = require('mongoose');

const BeaconsSchema = mongoose.Schema({
    line: { type: String, unique: true, require: true },
    beaconTagName: { type: String, unique: true, require: true },
    usersToday: { type: Number, require: true },
    readingUsersToday: { type: Number, require: true }
});

module.exports = mongoose.model('Beacons', BeaconsSchema);