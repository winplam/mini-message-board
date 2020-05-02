var express = require('express')
var router = express.Router()

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
]

// GET home page
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages })
})

// GET new page
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Post A New Message' })
})

// POST new message
router.post('/new', (req, res, next) => {
  messages.push({
    user: req.body.messageUser,
    text: req.body.messageText,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router
