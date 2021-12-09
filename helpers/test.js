/* eslint-disable */
function hello (canvas, container) {

  // °° SET UP °° //


// canvas size

canvas.width = container.clientWidth;
canvas.height = container.clientHeight;

// define context shortcut C -> load functions to draw elements

var c = canvas.getContext("2d");

// °° MOUSE EVENT°° //
var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 160;
var newColor = "#d1543e";

window.addEventListener("mousemove", function(event){
  // if the distance of our mouse from the circle is less than 50 then they grow
  // event è un oggetto con i dati del mouse, tipo la sua x e y position
  //compare the position of event with position of circle
  //setta la posiione dell'evento con la variabile mouse
  mouse.x = event.x;
  mouse.y = event.y;
})

// responsive canvas
window.addEventListener("resize", function(){
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  // quando si resize, i cerchi non si spawnano nella nuova zona, rimane vuota, chiamando questa funzione ogni volta che si cambia la grandezza della finestra farà si che nuovi cerchi rewspawnano
  init();
});


// °° DRAWING °° //

// function circle:

function CanvasCircle(x,y,dx,dy,radius,color) {
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy= dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = color;
  this.originalColor = color;
  
  this.draw = function() {
    
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0,  Math.PI * 2, false);
    c.lineWidth = 5;
    c.fillStyle = this.color;
    c.fill(); 
    
  }
  
  this.update = function () {
      if (this.x + this.radius > canvas.width){ this.dx = -this.dx}
      if (this.x - this.radius < 0){ this.dx = -this.dx}
       // logica per verticale
      if (this.y + this.radius > canvas.height){ this.dy = -this.dy}
      if (this.y - this.radius < 0){ this.dy = -this.dy}
      this.x += this.dx;
      this.y += this.dy;
      
    // interaction with mouse
    
    if(mouse.x -this.x < 50 && mouse.x -this.x > -50 
       && mouse.y -this.y < 50 && mouse.y -this.y > -50){
      if (this.radius < maxRadius) {this.radius +=1; this.color = newColor}
    }
    else if (this.radius>this.minRadius){this.radius -=1; this.color = this.originalColor}
    
      this.draw();
  }
     
}; // fine funzione circle



// °° MULTIPLY  CIRCLES LOOP °° //
  // array dove riporre gli elementi creati
var circleArray = [];


function init(){
  
  // il circle array per mantenere il suo scope deve essere fuori dalla funzione init, ma devi risettarlo in uno stato vuoto dentro la funzione, se non lo fai, ogni volta che resize, si aggiungeranno 100 nuovi cerchi, rendendo pesante il framerate
  circleArray = [];
  // crea X° numero di cerchi
for (var i = 0; i<460; i++){
  // elementi da randomizzare
  var x = Math.random() * (canvas.width - radius * 2) + radius; 
  var y = Math.random() * (canvas.height -radius * 2) + radius;
  // varied velocity
  var dx = Math.random()+0.5;
  var dy = Math.random()+0.5;
  var myRadius = [11, 25, 8, 15, 5, 3, 11]
  var radius = myRadius[Math.floor(Math.random()*myRadius.length)];
  var myColors = ["#f28665","#ffca0f","#f1e8cd"];
  var color = myColors[Math.floor(Math.random() * myColors.length)];
  // per aggiungerli all'array, usa push
  circleArray.push(new CanvasCircle(x,y,dx,dy,radius,color));
  
}; // end for loop  
};


// °° ANIMATION °° //
function animate(){
  
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  // è meglio usare questo metodo piuttosto di mettere l'intera funzione di prima direttamente in questa funzione. così è piu pulito e meglio leggibile
  
   for (var e=0; e < circleArray.length; e++){
     
     circleArray[e].update();
   };           

};

init();
animate();

}

export { hello }
