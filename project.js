var particles = [];
var fundos = [];
var glifos = [];
var img;
var logotri;
var teste;
var m = 0;
var loop;
var alphafade = 255;
var idlogo= 255;
var idglifo = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  logotri = loadImage("logofinal.png");
  teste = loadImage("primeira-tela-1.png");
  loop = 0;
  for (var i = 0; i < 8; i++){
    fundos[i] = loadImage("primeira-tela-" + (i+1) + ".png");
  }

  for (var i = 0; i < 7; i++){
    glifos[i] = loadImage("Glifo" + (i+1) + ".png");
  }

  for (var i = 0; i < 256; i++) {
    p = new Estrelas();
    particles.push(p); // Criação do vetor das estrelas do fundo
  }
}

function draw() {
  background(fundos[0]);

  if (m == 0) { //Página inicial estática
    estrelas();
    imageMode(CENTER);
    image(logotri, windowWidth / 2, windowHeight / 2);
    imageMode(CORNER);
  }

  else if (m == 1){ //Fadeout do logo
    tint(255, alphafade);
    imageMode(CENTER);
    image(logotri, windowWidth / 2, windowHeight / 2);
    imageMode(CORNER);
    estrelas();
    fadeout(2, 2);
    noTint();
    }

  else if (m == 2){ //Fadein do glifo 1 + mudança de fundo
    fadeinfundoeglifo(fundos[1], glifos[0], 3);
  }

  else if (m == 3){ //Fadeout glifo 1
    image(fundos[1], 0,0,  windowWidth, windowHeight);
    fadeoutglifo(glifos[0], 4);
  }

  else if (m == 4){ //Fadein texto 1
    image(fundos[1], 0,0,  windowWidth, windowHeight);

//    textAlign(LEFT, TOP);

    texto('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere sapien vitae vulputate aliquam.');
    //fittedText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere sapien vitae vulputate aliquam.', 7, 0, 0, windowWidth, windowHeight);
    estrelas();
    fadein(5, 1);
  }

  else if (m == 5){ //Fadeout texto 1
    image(fundos[1], 0,0,  windowWidth, windowHeight);
    //textAlign(LEFT, TOP);

    texto('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere sapien vitae vulputate aliquam.');
    //fittedText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere sapien vitae vulputate aliquam.', 7, 0, 0, windowWidth, windowHeight);
    estrelas();
    fadeout(6, 1);
  }

  else if (m == 6){ //Fadein do glifo 2 + mudança de fundo
    image(fundos[1], 0,0,  windowWidth, windowHeight);
    fadeinfundoeglifo(fundos[2], glifos[1], 7);
  }

  else if (m == 7){ //Fadeout glifo 2
    image(fundos[2], 0,0,  windowWidth, windowHeight);
    fadeoutglifo(glifos[1], 8);
  }

  else if (m == 8){ //Fadein texto 2
    image(fundos[2], 0,0,  windowWidth, windowHeight);
    texto('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere sapien vitae vulputate aliquam.');
    estrelas();
    fadein(9, 1);
  }

  else if (m == 9){ //Fadeout texto 2
    image(fundos[2], 0,0,  windowWidth, windowHeight);
    texto('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere sapien vitae vulputate aliquam.');
    estrelas();
    fadeout(10, 1);
  }

  else if (m == 10){ //Fadein do glifo 2 + mudança de fundo
    image(fundos[2], 0,0,  windowWidth, windowHeight);
    fadeinfundoeglifo(fundos[3], glifos[2], 11);
  }

  else if (m == 11){ //Fadeout glifo 2
    image(fundos[3], 0,0,  windowWidth, windowHeight);
    fadeoutglifo(glifos[2], 12

    );
  }

  else if (m == 12){ //Fadein texto 2
    image(fundos[3], 0,0,  windowWidth, windowHeight);
    texto('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere sapien vitae vulputate aliquam.');
    estrelas();
    fadein(13, 1);
  }

  else if (m == 13){ //Fadeout texto 2
    image(fundos[3], 0,0,  windowWidth, windowHeight);
    texto('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere sapien vitae vulputate aliquam.');
    estrelas();
    fadeout(15, 1);
  }

  else if (m == 14){ //Fadeout do logo
    image(fundos[3], 0,0,  windowWidth, windowHeight);
    tint(255, alphafade);
    imageMode(CENTER);
    image(logotri, windowWidth / 2, windowHeight / 2);
    imageMode(CORNER);
    image(fundos[0], 0,0,  windowWidth, windowHeight);
    estrelas();
    fadein(0, 6);
    noTint();
    }

  else if (m == 15){
    image(fundos[3], 0,0,  windowWidth, windowHeight);
    fadeinfundoelogo(fundos[0], logotri, 0);
    }
  }

//Função que controla o movimento das estrelas do fundo
function estrelasfast() {
  for (var i = 0; i < particles.length - 1; i++) {
    if (particles[i].getalfa() < 5) {
      particles[i].reset(); //Quando o alfa das particulas está quase apagando, ele reseta a particula
      break;
    }
  }

  for (i = 0; i <= particles.length - 1; i++) {
    particles[i].updatefast();
    particles[i].show(); //Mostra as particulas se movendo
  }
}

function estrelas() {
  for (var i = 0; i < particles.length - 1; i++) {
    if (particles[i].getalfa() < 5) {
      particles[i].reset(); //Quando o alfa das particulas está quase apagando, ele reseta a particula
      break;
    }
  }

  for (i = 0; i <= particles.length - 1; i++) {
   particles[i].update();
    particles[i].show(); //Mostra as particulas se movendo
  }
}

function fadeinfundoeglifo(fundo, glifo, nextnivel){
  tint(255, alphafade);
  image(fundo, 0,0, windowWidth, windowHeight);
  imageMode(CENTER);
  image(glifo, windowWidth / 2, windowHeight / 2, 100, 100);
  imageMode(CORNER);
  fadein(nextnivel, 6);
  noTint();
  estrelasfast();

}

function fadeinfundoelogo(fundo, glifo, nextnivel){
  tint(255, alphafade);
  image(fundo, 0,0, windowWidth, windowHeight);
  imageMode(CENTER);
  image(glifo, windowWidth / 2, windowHeight / 2);
  imageMode(CORNER);
  fadein(nextnivel, 6);
  noTint();
  estrelasfast();

}

function fadeoutglifo(glifo, nextnivel){
  tint(255, alphafade);
  imageMode(CENTER);
  image(glifo, windowWidth / 2, windowHeight / 2, 100, 100);
  imageMode(CORNER);
  fadeout(nextnivel, 1.5);
  estrelas();
  noTint();
  console.log(alphafade);

}

//Função que controla o fadeout das imagens e passa pro proximo nivel de animação
function fadeout(proximonivel, speed){
  alphafade = alphafade - speed;
  if (alphafade < 0)
    {
        alphafade = 0;
        m = proximonivel;
      }
}

//Função que controla o fadein das imagens e passa pro proximo nivel de animação
function fadein(proximonivel, speed){
  alphafade = alphafade + speed;
  if (alphafade > 255)
    {
        alphafade = 255;
        m = proximonivel;
      }
}

//Função que controla no início se houve movimento na roda do mouse
function mouseWheel(event) {
  if (event.delta != 0 && loop == 0) {
    m = 1;
    loop = 1;
  }
}

//Função que controla no inicio se houve clique do mouse
function mouseClicked(){
  if ( loop == 0){
    m = 1;
    loop = 1;
  }
}

function fittedText( text, font, posX, posY, fitX, fitY)
{

  tint(255, alphafade);
  fill(255, alphafade);
  textSize(min(7*fitX/textWidth(text), fitY));
  text(text, posX, posY);
  noTint();
}


//Função que mostra texto e controla as propriedades
function texto(string){
  tint(255, alphafade);
  fill(255, alphafade);
  //textSize(50);
   if(windowWidth > 1000){
      textSize(windowWidth/60);
  }
  else{
    textSize(50);
  }
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  text(string, windowWidth / 2, windowHeight / 2 , windowWidth, windowHeight);
  noTint();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Estrelas {

  constructor() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
    this.vx = random(-1, 1);
    this.vy = random(-2, -1);
    this.alfa = random(0, 100);
  }

  getalfa() {
    return this.alfa;
  }

  reset() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
    this.vx = random(-1, 1);
    this.vy = random(-2, -1);
    this.alfa = 100;


  }

  update() {
    this.x += 2*this.vx;
    this.y += 2*this.vy;
    this.alfa--;

  }

  updatefast(){
    this.x += 4*this.vx;
    this.y += 4*this.vy;
    this.alfa--;

  }

  show() {
    fill(255, 255, 255, this.alfa);
    noStroke();
    ellipse(this.x, this.y, 5, 5);
  }

}
