const express = require('express');
const github = require('github-profile');

const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.set('view engine', 'ejs')

app.get('/', function(req,res){
    res.render('app', {profile:''})
})

app.post('/getinfo', (req, res)=>{
    github(req.body.username).then((profile) => {
        console.log(profile);
        res.render('app', {profile:profile})
    });
});

app.listen(9000, function(req, res){
    console.log('Running...')
});