/*
let vector = ['hola', 'que show', 19, true] ;

alert(vector.length);
*/

//Vectore
/*
for(let  i=0; i<vector.length; i++){


    document.write(vector[i] + '<br>');
}
*/

//Arrays asociados


let pc = {
    nombre: "DiabloPc",
    procesador: "Intel Core i5 8va",
    ram: "16 GB 3200 Gz dual channel",
    espacio: "2 TB HDD/256 GB SSD"
}



let frase = `El nombre de la computadora es:<b> ${pc['nombre']} </b> <br>
            el procesador que tiene es: <b>${pc['procesador']}</b><br>
            tiene de ram <b> ${pc['ram']}</b><br>
            y tiene de almacenamiento <b> ${pc['espacio']} </b>`;



document.write(frase);
