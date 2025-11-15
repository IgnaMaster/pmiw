class Juego {

  constructor (cantidadEnemigos) {
    this.cantEnemigos = cantidadEnemigos;
    this.crearPersonaje ();
    this.crearEnemigos ();
    this.crearCasa();
    this.sonando = false;
    this.framesDReset = 0;   //FRAMES DESDE EL RESET
    this.Cooldown = 180;  // COOLDOWN DE LOS ENEMIGOS
  }

  actualizar () {
    this.moverPersonaje() ;
    this.movimientoEnemigos();
    this.verificarColisiones();
    this.show ();
    this.loose();
    this.VerificarAltura();
  }

  VerificarAltura() {

    this.framesDReset++;   //CONTADOR
    if (this.personaje.PosY < height/2) {

      if (this.framesDReset >= this.Cooldown) {
        this.resetEnem();
        this.framesDReset = 0;
      }
    }
  }


  loose () {
    if (!this.sonando && this.personaje.Vida === 0) {
      loose.play();
      this.sonando = true;
    }
    if (!this.sonando && this.personaje.Vida === 2) {
      win.play();
      this.sonando = true;
    }
  }
  reset () {     //RESET GENERAL
    this.crearPersonaje ();
    this.crearEnemigos ();
    this.crearCasa();
    this.sonando = false
  }

  resetEnem() {   //RESET SOLO DE ENEMIGOS
    for (let i = 0; i < this.enemigos1.length; i++) {
      this.enemigos1[i].reset();
    }
    for (let a = 0; a < this.enemigos2.length; a++) {
      this.enemigos2[a].reset();
    }
  }


  show () {
    this.casa.show();
    this.personaje.show() ;
    for (let i= 0; i < this. cantEnemigos; i++) {
      this.enemigos1[i].show ();
    }
    for (let a= 0; a < this.cantEnemigos; a++) {
      this.enemigos2[a].show ();
    }
  }

  crearEnemigos () {
    this.enemigos1 =[];
    this.enemigos2 =[];
    for (let i= 0; i < this. cantEnemigos; i++) {
      this.enemigos1 [i] = new Enemigo("Derecha");
      this.enemigos1[i].asignarDireccion();
    }
    for (let a= 0; a < this. cantEnemigos; a++) {
      this.enemigos2 [a] = new Enemigo("Izquierda");
      this.enemigos2[a].asignarDireccion();
    }
  }

  crearCasa () {
    this.casa = new Casa();
  }

  crearPersonaje () {
    this.personaje = new Personaje (width/2, height - 20, 20);
  }

  moverPersonaje () {
 if (this.personaje.Vida === 1) {
      
    if (keyIsDown(LEFT_ARROW)) {
      this.personaje.PosX -= this.personaje.velX;
      this.personaje.Tom=this.personaje.IZ;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.personaje.PosX += this.personaje.velX;
      this.personaje.Tom=this.personaje.DE;
    }
    if (keyIsDown(UP_ARROW)) {
      this.personaje.PosY -= this.personaje.velY;
      this.personaje.Tom=this.personaje.AR;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.personaje.PosY += this.personaje.velY;
      this.personaje.Tom=this.personaje.AB;
    }
    }

    if (this.personaje.PosX >= width) {
      this.personaje.PosX = 0;
    } else if (this.personaje.PosX <= 0) {
      this.personaje.PosX = width;
    }
    if (this.personaje.PosY > height - this.personaje.Tam / 2) {
      this.personaje.PosY = height - this.personaje.Tam / 2;
    }
    if (this.personaje.PosY < 50) {
      this.personaje.PosY = 50;
    }
  }



  movimientoEnemigos() {
    for (let i = 0; i < this.enemigos1.length; i++) {
      this.enemigos1[i].mover();
    }

    for (let a= 0; a < this.enemigos2.length; a++) {
      this.enemigos2[a].mover();
    }
  }


  verificarColisiones () {
    for (let i = 0; i < this.enemigos1.length; i++) {
      if (dist(this.personaje.PosX, this.personaje.PosY, this.enemigos1[i].PosX, this.enemigos1[i].PosY)<= (this.personaje.Tam/2) + (this.enemigos1[i].Tam/2)) {
        this.personaje.Vida = 0;
      }
    }
    for (let a= 0; a < this.enemigos2.length; a++) {
      if (dist(this.personaje.PosX, this.personaje.PosY, this.enemigos2[a].PosX, this.enemigos2[a].PosY)<= (this.personaje.Tam/3) + (this.enemigos2[a].Tam/2)) {
        this.personaje.Vida = 0;
      }
    }
    if (dist(this.personaje.PosX, this.personaje.PosY, this.casa.PosX, this.casa.PosY)<= (this.personaje.Tam/2) + (this.casa.Tam/2)) {
      this.personaje.Vida = 2;
    }
  }
}

class Casa {

  constructor () {
    this.PosX = width/2;
    this.Tam = 90;
    this.PosY = 0;
    this.Home= loadImage('data/CASITA.png');
  }

  show () {
    push();  
    imageMode (CENTER);
    image (this.Home, this.PosX, this.PosY, this.Tam, this.Tam);
    pop();
  }
}

class Personaje {

  constructor (PX, PY, TAM) {
    this.PosY = PY;
    this.PosX = PX;
    this.Tam = TAM;
    this.estaVivo = true;
    this.velY = 3;
    this.velX = 3;
    this.Vida = 1;
    this.AR=loadImage ('data/AR.png');
    this.AB=loadImage ('data/AB.png');
    this.DE=loadImage ('data/DE.png');
    this.IZ=loadImage ('data/IZ.png');
    this.Tom = this.AR;
  }

  show () {
    if (this.Vida === 1) {
      fill (0, 255, 0);
      image (this.Tom, this.PosX, this. PosY, this.Tam+15, this.Tam+30);
    }
  }
}

class Enemigo {

  constructor (Direccion) {
    this.direccion = Direccion;
    this.PosX = 0;
    this.Tam = 30;
    this.Vida = true;
    this.PosY = random (70, height-this.Tam);
    this. vel = 5;
    this. vel2 = 6;
    this.MaloD=loadImage ('data/MaloDE.png');
    this.MaloI=loadImage ('data/MaloIZ.png');
    this.Mirando= this.MaloI;
  }
  // REINICIAR A LOS ENEMIGOS
  reset() {
    this.Vida = true;
    this.PosY = random(70, height - this.Tam);

    if (this.direccion === "Derecha") {
      this.PosX = width;
      this.Mirando=this.MaloI;
    } else if (this.direccion === "Izquierda") {
      this.PosX = 1;
      this.Mirando=this.MaloD;
    }
  }

  show () {
    if (this.Vida) {
      fill (255, 0, 0);
      image (this.Mirando, this.PosX, this. PosY, this.Tam, this.Tam);
    }
    if (this.PosX <= 0) {
      this.Vida = false;
      this.vel = this.vel2;
    }
    if (this.PosX  >= width + 1) {
      this.Vida = false;
      this.vel = this.vel2;
    }
  }

  asignarDireccion () {
    if (this.direccion === "Derecha") {
      this.PosX = width;
      this.Mirando=this.MaloI;
    }
    if (this.direccion === "Izquierda") {
      this.PosX = 1;

      this.Mirando=this.MaloD;
    }
  }


  mover () {
    if  (this.direccion === "Derecha") {
      this.PosX = this.PosX - this. vel;
      this.Mirando=this.MaloI;
    }

    if  (this.direccion === "Izquierda") {
      this.PosX = this.PosX + this. vel;
      this.Mirando=this.MaloD;
    }
  }
}
