var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.options('/messages', (req, res) => {
  res.sendStatus(200);
});

router.get('/', (req, res) => {
  console.log('Im getting request');
  res.send('Hi I got got');
})

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

