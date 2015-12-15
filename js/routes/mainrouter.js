var express = require('express');
var router = express.Router();



router.get('/',function(req,res){
    if (!req.session.user) {
        res.redirect('/login');
    }else {
        res.redirect('/timeline')
    }
})


router.get('/login',function(req,res){
    if(!req.session.user){
        res.render('login')
    }else{
        res.redirect('/timeline')
    }
})

router.get('/timeline',function(req,res){
    res.send('hi');
})



module.exports = router;