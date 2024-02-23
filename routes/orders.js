const router = require('express').Router();
const ordersControllers = require('../controllers/ordersControllers');
const {verifyToken} = require('../middleware/verifyToken')


router.get('/ verifyToken', ordersControllers.getUserOrders)
//router.delete('/',verifyToken, ordersControllers.delete);


module.exports = router