const express = require('express'); // HTTP
const hbs= require('hbs'); //HTML DINÁMICOS 
const dodyParser= require('body-parser'); // Procesar solicitudes POST 
const bodyParser = require('body-parser');
const port= process.env.PORT || 3000; // Puerto .

const app=express();

// motor de vistas - HTML Dinamico
app.set('view engine','hbs'); 
hbs.registerPartials(__dirname + '/views/partials',()=>{}); 

//middleware - use 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

app.post('/dashboard',(req,res)=>{
    res.render('dashboard',{
        nombre:"Sebastián Colin",
        email: "sebscolin27@gmail.com"
    });
})

app.get('/login',(req,res)=>{
    res.render('login'); 
})

app.get('*',(req,res)=>{
    res.render('404'); 
})

app.listen(port,()=>{
    console.log('El servidor está corriendo en dl puerto: ',port);
})