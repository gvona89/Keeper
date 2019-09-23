const express = require('express')
const Hive = require('../models/hives.js')
const router = express.Router()

router.route('/').get((req, res) => {
  Hive.find()
    .then(hives => res.json(hives))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/').post((req, res) => {
  const name = req.body.name
  const imageLink = req.body.imageLink

  const newHive = new Hive({ name, imageLink })

  newHive.save()
    .then(() => res.json('Hive Added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/edit/:id').put((req, res) => {
  Hive.findById(req.params.id)
    .then(hive => {
      hive.name = req.body.name
      hive.imageLink = req.body.imageLink

      hive.save()
        .then(() => res.json('Hive Updated'))
        .catch(err => res.send(400).json('Error: ' + err))
    })
})

module.exports = router