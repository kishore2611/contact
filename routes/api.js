const router = require('express').Router()
const { Router } = require('express');
const { ContactUs } = require('../controllers/contactus');



router.post('/contact', ContactUs)



module.exports = router;