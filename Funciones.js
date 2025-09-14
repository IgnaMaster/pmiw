// Ignacio Macías, Comisión 1; Segundo Cuatrimestre.
// Nombre del proyecto: Pilares de Fuego [P5] (Desde:Imagen 16)
// LINK: https://youtu.be/R1iYyTzgrE0



//FUNCIONES/VOIDS TP3<<<<<<<

function hacerEl(x, y, diam) {                               // HACER LA ELLIPSE
  ellipse (x, y, diam, diam);
}

function distDiagACT(x, y) {
  let U = 1;
  if ((canti-U-x) >y) {
    return (canti-U-x)-y;
  } else {
    return y-(canti-U-x);
  }
}

function mousePressed() {
  tam ++;
  fill(r+=16, g, b);                                      //PILARES DE FUEGO [NADA QUE CAMBIAR] ----vv
  fill(g+=3);
  stroke(164, 13, 20);
  //fill(255, 0, 0);
}

function keyPressed() {
  background (255);
  tam=400/canti;
  r = b;
  g = b;
  noStroke();
}
                                                          //PILARES DE FUEGO [NADA QUE CAMBIAR] ----^^
