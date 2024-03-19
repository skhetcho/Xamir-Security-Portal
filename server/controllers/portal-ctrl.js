const Portal = require('../models/portal-model')
const fetch = require('node-fetch');


createFeedback = async (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'There is no feedback provided',
        })
    }
    feedbackBody = {feedbackValue: body.feedbackValue}
    const portal = new Portal(feedbackBody)
    //this console log is for development use to showcase the Portal object
    console.log(portal);
    if (!portal) {
        return res.status(400).json({ success: false, error: err })
    }
    const human = await validateHuman(body.token);
    if (!human) {
        return res.status(400).json({ success: false, error: "reCaptcha failed" })
    }

    portal
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: portal._id,
                message: 'Feedback submitted!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Feedback not passed!',
            })
        })
}


//implementation fo reCaptcha to reduce/eliminate spam to the feedback form
validateHuman = async (token) => {
    const secret = "6Lc8YukbAAAAAEMJ8nRrGSYdIHAGnueE7iGCReYE";
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      {
        method: "POST",
      }
    );
    const data = await response.json();
    console.log("recaptcha data ...", data);
    return data.success;
  };

// THIS SECTION HAS BEEN COMMENTED OUT BECAUSE THIS COULD BE USED IF WE WERE TO BUILD AN ADMIN PORTAL TO REVIEW ALL FEEDBACKS
// SUBMITTED TO THE SITE. LATER IMPLEMENTATION MAYBE NECESSARY.

// getFeedbackById = async (req, res) => {
//     await Portal.findOne({ _id: req.params.id }, (err, portal) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!portal) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Feedback not found` })
//         }
//         return res.status(200).json({ success: true, data: portal })
//     }).catch(err => console.log(err))
// }

// getAllFeedbacks = async (req, res) => {
//     await Portal.find({}, (err, feedbacks) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!feedbacks.length) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `No feedback found` })
//         }
//         return res.status(200).json({ success: true, data: feedbacks })
//     }).catch(err => console.log(err))
// }

module.exports = {
    createFeedback,
    // getFeedbackById,
    // getAllFeedbacks,
}