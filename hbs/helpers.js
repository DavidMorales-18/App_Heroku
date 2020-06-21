const hbs = require('hbs') // Llamar

/* 
HELPERS:
Funciones que me permiten trabajar dentro hbs

*/
hbs.registerHelper('getAnio', () => { /* Me retorna el ano */
    return new Date().getFullYear()
});
hbs.registerHelper('capitalizar', (texto) => { //cambiar a mayusculas y minusculas (Resive un texto )
    /* Manejo de caracteres */
    let palabras = texto.split(' '); //Genera una lista de string separada por algo en blanco
    palabras.forEach((palabra, idx) => { //forEach --> dentro de una lista : la palabra y el indice
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
            /* caracter posicion cero y se reliza la mayuscula + cojer el resto y trozar  y desde hay todo minuscula  */
    });
    return palabras.join(' '); /* junta todos los elementos del vector y ponga un espacio el join es lo contrario del split */


});

/* Heruko : Servicio en la nuve  */