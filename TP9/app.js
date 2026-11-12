let utiles = ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"];
console.log(utiles)
console.log(utiles[0])
console.log(utiles[2])
console.log(utiles[utiles.length - 1]);
console.log(utiles.length);
utiles.push("Mochila");
console.log(utiles);
utiles.unshift("Cartuchera");
console.log(utiles);
console.log(utiles.length);
let elementoEliminado = utiles.pop();
console.log(elementoEliminado);
console.log(utiles);


let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"];
console.log(productos);
console.log(productos.length);
productos.push("Azúcar");
productos.push("Yerba");
productos.push("Café");
console.log(productos);
productos.unshift("Sal");
productos.unshift("Galletitas");
console.log(productos);
console.log(productos.length);
let prodEliminado1 = productos.pop();
console.log(prodEliminado1);
let prodEliminado2 = productos.pop();
console.log(prodEliminado2);
console.log(productos);
let prodEliminadoPrimero = productos.shift();
console.log(prodEliminadoPrimero);
console.log(productos);
console.log(productos.length);

let productos = [   "Teclado","Mouse","Monitor",   "Auriculares",  "Webcam",  "Parlantes"];
  console.log(productos.indexOf("Mouse"));
  console.log(productos.indexOf("Monitor"));
  console.log(productos.indexOf("Webcam"));
  console.log(productos.indexOf("Impresora"));
  let buscarTeclado = productos.indexOf("Teclado");
  if (buscarTeclado !== -1) {
    console.log("El teclado está registrado");
  }
  let buscarImpresora = productos.indexOf("Impresora");
  if (buscarImpresora !== -1) {
    console.log("La impresora está registrada");
  } else {
    console.log("La impresora no está registrada");
  }
  productos.push("Impresora");
  console.log(productos.indexOf("Impresora"));
  console.log(productos.length);


  let peliculas = ["Toy Story","Shrek","Buscando a Nemo","Los Increíbles","Ratatouille"  ];
  console.log(peliculas)
  console.log(peliculas.length)
peliculas.push("Cars")
peliculas.push("Monsters, Inc.")
console.log(utiles)
peliculas.unshift("Intensamente")
peliculas.unshift("coco")
console.log(peliculas)
let pos1 = peliculas.indexOf("Shrek")
let pos2 = peliculas.indexOf("coco")


