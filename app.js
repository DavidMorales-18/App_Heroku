const htpp = require('http'); //traemos e incorporamos al libreria 
htpp.createServer((req, res) => {
        //crea el servidor con Una funcion htpp resiviendo el req y res ; req:viene del cliente y el res: es lo que yo respodere al cliente 
        /*  res.write('Hola mundo desde la WEB') //cuando se haga peticion al servido a escribir en la Web un simple texto  */

        res.writeHead(200, { 'Content-Type': 'application/json' }); //200 la respuesta fue corecta 
        //El tipo de contenido le voy a decir que le voy a enviar un json
        /* Respondemos un Json */
        let content = { //contenido 
                nombre: "Morales",
                edad: 23,
                url: req.url //
            }
            // envia un json al cliente
        res.write(JSON.stringify(content))
            //La peticion vamos llamar  la URL y va mandar a strificar al objeto Json 

        res.end() //finalizas la escritura del servidor 
    }).listen(8000) //por que puerto voy a escuchar esto 


console.log("escuchando al servidor con el puerto   8000");

/* 
para probarlo node app 
 npm i express --save
*/

/* 
https://handlebarsjs.com/

instalacion handlebars :npm install hbs --save



*/