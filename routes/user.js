const router = require('express').Router();
const userController = require('../controllers/usersControllers');
const {verifyToken} = require('../middleware/verifyToken')

router.get('/verifyToken', userController.getUser)
router.delete('/ verifyToken', userController.deleteUser);


module.exports = router