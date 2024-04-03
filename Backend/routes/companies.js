const express = require("express");
const router = express.Router();
const CompanyController = require('../controllers/CompanyController');



router.post('/', CompanyController.create);
router.post('/login', CompanyController.login);

router.get('/getAll', CompanyController.getAll);


module.exports = router