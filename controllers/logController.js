const express = require('express')
const Log = require('../models/log.js')
const router = express.Router()

router.route('/').get((req, res) => {
  Log.find()
    .then(log => res.json(log))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/').post((req, res) => {
  const userId = req.body.userId
  const timeStamp = Date(req.body.timeStamp)
  const yearNumber = Number(req.body.yearNumber)
  const weekNumber = Number(req.body.weekNumber)
  const dayNumber = Number(req.body.dayNumber)
  const boxType = req.body.boxType
  const boxNumber = req.body.boxNumber
  const frameNumber = req.body.frameNumber
  const comments = req.body.comments

  const newLog = new Log({ 
    userId, 
    timeStamp, 
    yearNumber, 
    weekNumber, 
    dayNumber, 
    boxType, 
    boxNumber, 
    frameNumber, 
    comments 
  })

  newLog.save()
    .then(() => res.json('Log Added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/edit/:id').put((req, res) => {
  Log.findById(req.params.id)
    .then(log => {
      log.userId = req.body.userId
      log.date = Date(req.body.date)
      log.timeStamp = Date(req.body.timeStamp)
      log.yearNumber = Number(req.body.yearNumber)
      log.weekNumber = Number(req.body.weekNumber)
      log.dayNumber = Number(req.body.dayNumber)
      log.boxType = req.body.boxType
      log.boxNumber = Number(req.body.boxNumber)
      log.frameNumber = Number(req.body.frameNumber)
      log.comments = req.body.comments


      log.save()
        .then(() => res.json('Log Updated'))
        .catch(err => res.send(400).json('Error: ' + err))
    })
})

module.exports = router