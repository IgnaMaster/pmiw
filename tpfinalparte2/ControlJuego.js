class ControlPantallas {
  constructor () {
    this.estado = 0;
    this.fondo= 0;
    this.botones = [];
    this.juego = new Juego(5);
    this.sonando = false;
  }

  reiniciarJuego () {
    this.estado = 0;
    this.juego.reset ();
  }

  musica () {
    suspenso.amp(0.5);
    suspenso.play();
    suspenso.loop();
    this.sonando = true;
    
  }

  mostrar () {
    if (this.estado===0) {
      image (imagen1, 0, 0);
      textSize(30);
      textAlign(CENTER, TOP);
      text ('"La sonrisa” - Ray Bradbury\n EL JUEGO', width/2, height/4);
      this.botones [0] = new Boton (220, 330, 200, 50, "COMENZAR");
      this.botones [1] = new Boton (250, 270, 140, 50, "Créditos");
      this.botones[0].show();
      this.botones [1].show();
    }


    if (this.estado===1) {
      image (imagen2, 0, 0);
      this.botones [2] = new Boton (260, 415, 140, 50, "JUGAR" );
      this.botones [2].show();
    }

    if (this.estado===2) {
      image (imagen1, 0, 0);
      textSize(24);
      textAlign(CENTER, TOP);
      text ('Trabajo realizado por:\n Mini Marco (122798/8)\n Macías Ignacio (122768/2) \nImagenes generadas con ChatGPT (IA)', width/2, height/4);
      this.botones [3] = new Boton (40, 400, 150, 50, "Volver" );
      this.botones [3].show();
    }

    if (this.estado===3) {
      image (fondo, 0, 0);     
      this.juego.actualizar();
    }


    if (this.juego.personaje.Vida === 0 ) {
      textSize(30);
      textAlign(CENTER, TOP);
      fill (255);
      text ('Te robaron la pieza!', width/2, height/4);
      this.botones [4] = new Boton (220, 330, 200, 50, "REINICIAR");
      this.botones [4].show();
    }

    if (this.juego.personaje.Vida === 2 ) {
      textSize(30);
      textAlign(CENTER, TOP);
      fill (255);
      text ('Lograste escapar!', width/2, height/4);
      this.botones [4] = new Boton (220, 330, 200, 50, "REINICIAR");
      this.botones [4].show();
    }
  }
}


class Boton {
  constructor (posx, posy, tamx, tamy, textoBoton) {
    this.PosX = posx;
    this.TamX = tamx;
    this.TamY = tamy;
    this.PosY = posy;
    this.TextoBoton = textoBoton;
    this.calculoSobreMouse ();
  }

  calculoSobreMouse (PosX, PosY, TamX, TamY) {
    return mouseX>this.PosX && mouseX<this.PosX+this.TamX && mouseY>this.PosY && mouseY<this.PosY+this.TamY;
  }

  show () {
    rectMode (CORNER)
      if (this.calculoSobreMouse()) {
      fill(255, 50, 0);
    } else {
      fill(200, 0, 0, 100);
    }
    noStroke();
    rect (this.PosX, this.PosY, this.TamX, this.TamY, 150);
    textAlign(CORNER, CENTER);
    fill (255);
    text(this.TextoBoton, this.PosX+this.TamX/2, this.PosY+this.TamY/2);
  }
}
