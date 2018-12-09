const express = require('express');
const BeaconsController = require('../controllers/beacons.controller');
const router = express.Router();

router.post('/beacons/verify', BeaconsController.verifyBeacon);

module.exports = router;