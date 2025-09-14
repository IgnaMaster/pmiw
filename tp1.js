// Ignacio Macías, Comisión 1; Segundo Cuatrimestre.
// Nombre del proyecto: Pilares de Fuego [P5] (Desde:Imagen 16)
// LINK: https://youtu.be/R1iYyTzgrE0

let IM16;
let canti;                                                     //canti=CANTIDAD DE COLUMNAS Y FILAS
let tam;                                                      // tam=TAMAÑO
let diam;                                                     // Diametro de las ellipses (posición como global recomendada en clase)
let r;                                                        //ROJO VARIABLE
let g;                                                        //VERDE VARIABLE
let b;                                                        //AZUL VARIABLE


function preload() {
  IM16 = loadImage('Data/16.png');
}

function setup() {
  createCanvas(800, 400)
    background(255);
  noStroke();
  canti = 14;
  tam = 400/canti;
  r = 0
  g = 0
  b = 0
}

function draw() {
  image(IM16, 0, 0);                                        //IMAGEN ORIGINAL
  ellipseMode(CENTER);
  translate(400, 0);                                        //MOVIMIENTO DE LOS PUNTOS DE INICIO
  fill(r, g, b);                                            // COLORES RGB DE LAS ELLIPSES
  
  
  for (let x=0; x < canti; x++) {
    for (let y=0; y < canti; y++) {
      let U=1;
      let C=0;

      dist=distDiagACT(x, y);                            //dist= DISTANCIA ENTRE ELLIPSES (distDiag = Distancia Diagonal)
      let fact = map(dist, C, canti, U, C);                 //fact=FACTOR DE CRECIMIENTO
      diam=tam*fact;                                      //diam= DIAMETRO DE LA ELLIPSE
      
      hacerEl (x*tam + tam/2, y*tam + tam/2, diam);       //hacerEl = HACER UNA ELLIPSE
    }
  }
}
