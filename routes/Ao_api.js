var express = require('express');
var router = express.Router();
var AoContrller = require('../controller/Ao')
const authenticate = require('../middle/authentication')
const upload = require('../middle/upload')
const jwt = require('jsonwebtoken')
var UserController = require('../controller/user')


router.post('/login', async function(req, res, next) {
    const {username,password}=req.body
    const user = await UserController.login(username,password)
    if(user)
    {
      console.log(user)
      const access_token = jwt.sign( user, process.env.JWT_SECRET_KEY);

      req.session.access_token = access_token
      res.status(200).json({status: true});
      console.log(username,password)
    }
    else
    {
        res.status(401).json({status: false});
    }
  });

  router.get('/logout', function(req, res, next) {
    req.session.destroy(function(err)
    {
        res.status(200).json({status: true});
    })
  });


// get Products lits 
router.get('/Ao',[authenticate.CheckLogin], async function(req, res, next) {
    const ao = await AoContrller.get();
    res.json({ ao: ao });
  });



  //edit
  router.get('/Ao/:id', [authenticate.CheckLogin], async function(req, res, next) {
    const {
        params:{id}
    } = req
    const ao = await AoContrller.getOne(id);
    res.json({ ao: ao });
  });

 




module.exports = router;