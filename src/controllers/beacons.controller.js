const BeaconsSchema = require('../models/beacons.model');
const ErrorHandler = require('../helpers/errors.helper');

/**
 * Verifies if user is in the bus
 * @api post
 * @param {JSON} req tagName - string
 * @param {*} res 
 * @param {*} next 
 */
const verifyBeacon = async (req, res, next) => {
    const beaconTagName = req.body.tagName;
    try {
        const bus = await BeaconsSchema.findOne({ beaconTagName });
        console.log(bus);
        const { line } = bus;

        res.status(200).send({
            success: true,
            busLine: line,
            msg: 'You are approved for reading'
        });
        console.log('[SUCCESS] Beacons: Successfuly verified you in the bus');
    } catch (error) {
        console.error('[ERROR] Beacons: Error occured while verifing beacon');
        ErrorHandler.throwError(res, error);
    }
}

module.exports = { verifyBeacon };