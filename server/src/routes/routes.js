const express = require('express');
const route = express.Router();
const controller=require('../controllers/compoundController');
const {validator}=require('../middleware/validation');
const {inputSchema,getSchema}=require('../middleware/schemas');
const auth = require('../middleware/auth');

route.get('/compound', auth, controller.getAllCompounds);
route.get('/compound/:id', auth, controller.getCompound);
route.put('/compound/:id', auth, validator(inputSchema), controller.updateCompound);
route.post('/compound', auth, validator(inputSchema), controller.addCompound);
route.delete('/compound/:id', auth, controller.deleteCompound);

module.exports=route;