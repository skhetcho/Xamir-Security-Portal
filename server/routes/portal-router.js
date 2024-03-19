const express = require('express')

const PortalCtrl = require('../controllers/portal-ctrl')

const router = express.Router()

router.post('/feedback', PortalCtrl.createFeedback)
// router.get('/feedback/:id', MovieCtrl.getFeedbackById)
// router.get('/feedbacks', MovieCtrl.getAllFeedbacks)

module.exports = router