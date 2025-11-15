let fondo;

function preload () {
  imagen1=loadImage ('data/imagen1.png');
  imagen2=loadImage ('data/imagen3.jpg');
  fondo=loadImage('data/Fondo.png');
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
  background (fondo);
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
