const express = require('express');
const exhbs =require('express-handlebars');

const api = require('novelcovid');

const app = express();

app.set('view engine','hbs');
app.engine('hbs',exhbs({
    extname:'hbs',
    defaultView:'home',
    layoutsDir:__dirname+'/views/layouts'
}));

app.get('/countries',(req,res)=>
{
    api.countries().then((response)=>{ 
        res.render('home',{info:response})
    } )})

















app.listen(3000,()=>console.log("Welcome to covid app"));
