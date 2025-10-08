//Buscar la forma de  hacer que los botones de la pantalla dos te lleven a nuevas otras. Hacer  que se lea el texto de la pantalla dos en adelante (Es tan largo que excede el tamaño de la pantalla, pero esta bien el tamaño de la fuente)


let imagen=[];
let estado=0;
let frases=[' “La sonrisa” - Ray Bradbury', '\n\nUn niño llamado Tom \nespera en una fila en la madrugada,\nentre ruinas y observando a la gente.', '\nDe repente, lo intentan echar de\nla fila.', 'Tom abandona el lugar, triste.', '\nUn hombre salta a defender\na Tom.'];
function preload() {
  for (let NUM=0; NUM<5; NUM++) {
    imagen[NUM]=loadImage('data/a'+NUM+'.png');
  }
}

function setup() {
  createCanvas(640, 480);
  for (let NUM=0; NUM<5; NUM++) {
  }
  textSize(2);
}


function draw() {

  if (estado===0) {
    fondo(imagen[0], frases[0], 48, width/2, height/4, 250, 330, 150, 50, "COMENZAR");
  }

  if (estado===1) {
    fondo(imagen[1], frases[1], 40, width/2, height/4, 100, 300, 140, 50, "Seguir");
  }
  if (estado===2) {
    fondo(imagen[2], frases[2], 40, width/2, height/4, 100, 370, 140, 50, "Ceder");
    boton(350, 370, 140, 50, "Resistir");
  }

  if (estado===3) {
    fondo(imagen[3], frases[3], 50, 200, 400, 400, 100, 50, "Otra cosa" );
  }

  if (estado===4) {
    fondo(imagen[4], frases[4], 50, 200, 400, 400, 100, 50, "hola" );
  }
}

function mouseClicked() {
  if (estado===0) {
    if (overMouse(250, 330, 150, 50)) {
      estado=1;
    }
  }
  if (estado===1) {
    if (overMouse( 100, 300, 140, 50)) {
      estado=2;
    }
  }

  if (estado===2) {
    if (overMouse( 100, 370, 140, 50)) {
      estado=3;
    }
    if (overMouse( 350, 370, 140, 50)) {
      estado=4
    }
  }
}

function boton(posX, posY, tamX, tamY, textoBoton) {
  if (overMouse(posX, posY, tamX, tamY)) {
    fill(255, 50, 0);
  } else {
    fill(200, 0, 0, 100);
  }
  rect(posX, posY, tamX, tamY, 180);
  fill(255);
  textAlign(CENTER, CENTER);
  text(textoBoton, posX+tamX/2, posY+tamY/2);
}



function fondo(imagen, texto, textsize, posX, posY, posXB, posYB, tamXB, tamYB, textoBoton) {
  image(imagen, 0, 0);
  fill(255);
  textAlign(CENTER, CENTER);
  //textFont('CastlePressNo2');
  // textSize(textsize);
  text(texto, posX, posY);
  textSize(30);
  boton(posXB, posYB, tamXB, tamYB, textoBoton);
}



function overMouse(posX, posY, tamX, tamY) {
  return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
}
