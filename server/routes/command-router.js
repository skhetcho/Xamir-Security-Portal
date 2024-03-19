const express = require('express')

const CommandCtrl = require('../controllers/command-ctrl')

const router = express.Router()

router.post('/nmap', CommandCtrl.runNmap)

//COULD BE NECESSARY FOR FUTURE IMPLEMENTATION
// router.get('/feedback/:id', MovieCtrl.getFeedbackById)
// router.get('/feedbacks', MovieCtrl.getAllFeedbacks)

module.exports = router