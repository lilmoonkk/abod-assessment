var express = require('express');
var router = express.Router();
const firebase = require('../firebase');

router.post('/register', async function(req, res){
    let body = req.body;
    try{
        await firebase.Register(body.email, body.password, function(value){
            res.sendStatus(value);
        });
    } catch (err) {
        console.log("Failed because ",err);
        res.sendStatus(500)
    }
});

router.post('/login', async function(req, res){
    let body = req.body;
    
    try{
        await firebase.Login(body.email, body.password, async function(value){
            res.sendStatus(value);
        });
    } catch (err) {
        console.log("Failed because ",err);
        res.sendStatus(500)
    } 
});

router.post('/reset', async function(req, res){
    let body = req.body;

    try{
        await firebase.ResetPassword(body.email)
        res.sendStatus(200);
    } catch (err) {
        console.log("Failed because ",err);
        res.sendStatus(500)
    }
});

module.exports = router;