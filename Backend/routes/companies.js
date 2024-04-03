const express = require("express");
const router = express.Router();
const CompanyController = require('../controllers/CompanyController');
const { authentication } = require('../middlewares/authentication')


router.post('/', CompanyController.create);
router.post('/login', CompanyController.login);
router.delete('/logout', authentication, CompanyController.logout);
router.get('/getAll', CompanyController.getAll);


module.exports = router