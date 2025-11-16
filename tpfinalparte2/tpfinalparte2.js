//Integrantes del grupo: Mini Marco (122798/8) && Macías Ignacio (122768/2) - Comisión 1
//Link Youtube: https://youtu.be/UxW8LBMAMlc

function preload () {
  imagen1=loadImage ('data/imagen1.jpg');
  imagen2=loadImage ('data/imagen3.jpg');
  fondo=loadImage('data/Fondo.jpg');
  MaloD=loadImage ('data/MaloDE.png');
  MaloI=loadImage ('data/MaloIZ.png');
  AR=loadImage ('data/AR.png');
  AB=loadImage ('data/AB.png');
  DE=loadImage ('data/DE.png');
  IZ=loadImage ('data/IZ.png');
  Home= loadImage('data/Casita.png');
  loose = loadSound('data/loose.mp3');
  suspenso = loadSound('data/suspenso.mp3');
  win = loadSound('data/win.mp3');
  click = loadSound('data/click.mp3');
}

function setup() {
  createCanvas (640, 480);
  control = new ControlPantallas ();
}


function draw() {
  control.mostrar ();
}

function mouseClicked() {
  if (control.estado===0) {
    if (control.botones[0].calculoSobreMouse()) {
      click.play();
      control.estado=1;
      if (!this.control.sonando) {
        control.musica ();
 
      }
    }
    if (control.botones[1].calculoSobreMouse()) {
      control.estado=2;
      click.play();
    }
  }
  if (control.estado===2) {
    if (control.botones[3].calculoSobreMouse()) {
      control.estado=0;
      click.play();
    }
  }
  if (control.estado===1) {
    if (control.botones[2].calculoSobreMouse()) {
      control.estado=3;
      click.play();
    }
  }
  if (control.juego.personaje.Vida === 0) {
    if (control.botones[4].calculoSobreMouse()) {
      control.reiniciarJuego ();
      control.estado=0;
      click.play();
    }
  }
  if (control.juego.personaje.Vida === 2) {
    if (control.botones[4].calculoSobreMouse()) {
      control.reiniciarJuego ();
      control.estado=0;
      click.play();
    }
  }
}
