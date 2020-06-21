const express = require('express') //importamos la libreria express
const app = express() //un objeto
const hbs = require('hbs') // Llamar

const puerto = process.env.PORT || 3000; // Me representa el proceso del puerto de la Web o del local

/* Process es un proceso que se esta ejecutando y voy a tener un puerto  */
require('./hbs/helpers')
const { text } = require('express')
app.use(express.static(__dirname + '/public')) //gestionar la pagina web html redirige a mi carpeta 
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');
//Motor de template debemos indicarle al express que voya usar tempalte(motor de las vistas es hbs)


/* express va a ir abuscar en la carpeta publico dependiendo lo que esta hay va arespoder  */

app.get('/', (req, res) => { //El metodo get cualquier peticion  le mandamos req y res
    res.render('home', {
        nombre: "David morales ", //le va mandar nombre y an 
        //la funcion me atrae la fecha autual del servidor 
        pag: 'Home'

    });
    //res.send('Hello World')
    /* let content = { //contenido 
            nombre: "Morales",
            edad: 23,
            url: req.url //
        }
        // envia un json al cliente */
    //res.send(content)

});
app.get('/about', (req, res) => { //El metodo get cualquier peticion  le mandamos req y res
    res.render('about', {
        an: new Date().getFullYear(), //la funcion me atrae la fecha autual del servidor 
        pag: 'Abaut'
    });
    //res.send('Hello World')
    /* let content = { //contenido 
            nombre: "Morales",
            edad: 23,
            url: req.url //
        }
        // envia un json al cliente */
    //res.send(content)

});


/*
app.get('/about', function(req, res) { //El metodo get cualquier peticion  le mandamos req y res 
    //Con el (/about)espara cambiar de paguina (Colocamos las URL )
    res.send('Este es mi primer sito web con Express + Node.js') //El mensaje que se a a enviar a about


}) */
app.listen(puerto, () => {
        console.log(`Escucho en el puerto ${puerto}`);
    }) //Imprima algo en la consola, resive el numero de puerto 


/* CORREMOS con nodemon  server 

--Motor de template
--Colocar la carpeta el nombre bien 
*/
/* 
Configuracion del nodemon :
nodemon server.js -e hbs,html,css

me ayuda a monotorizar los hbs,html,css cuando se vea un cambio 
*/