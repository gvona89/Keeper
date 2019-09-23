const express = require('express')
const User = require('../models/users.js')
const router = express.Router()

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const username = req.body.username
  const password = req.body.password
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const phone = req.body.phone
  const zipCode = req.body.zipCode

  const newUser = new User({ username, password, firstName, lastName, email, phone, zipCode })

  newUser.save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/edit/:id').put((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username
      user.password = req.body.password
      user.firstName = req.body.firstName
      user.lastName = req.body.lastName
      user.email = req.body.email
      user.phone = req.body.phone
      user.zipCode = req.body.zipCode


      user.save()
        .then(() => res.json('User Updated'))
        .catch(err => res.send(400).json('Error: ' + err))
    })
})

module.exports = router