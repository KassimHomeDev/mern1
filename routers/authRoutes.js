const{Router}= require("express");
const router = Router();
const manager = require('../controllers/controller');

  router.get('/api/get', manager.getHome);
  router.post('/api/add', manager.addData);
module.exports = router;