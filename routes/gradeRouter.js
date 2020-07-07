const router = require('express').Router();
const controller = require('../controllers/gradeController.js');

router.post('/grade/', controller.create);
router.get('/grade/', controller.findAll);
router.get('/grade/:id', controller.findOne);
router.put('/grade/:id', controller.update);
router.delete('/grade/:id', controller.remove);
router.delete('/grade/', controller.removeAll);

module.exports = router;
