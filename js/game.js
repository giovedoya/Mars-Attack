class Game{
  constructor(context) {
    this.ctx = context;
    this.enemies = [];  
    this.generateInterval = null; 
  }



_generateEnemies(){
  this.generateInterval = setInterval(() => {
    const newEnemies = new Enemies();
    newEnemies._appearEnemy();
    this.enemies.push(newEnemies);
    newEnemies._disappearEnemy();   
  }, 100)
}  

  _drawScreen (){
    //  escenario
    this.ctx.fillStyle = 'orange';
    this.ctx.fillRect(0, 500, 1000, 100)
  }

  // enemy  
  _drawEnemy(){  
   this.enemies.forEach((elem) => {
    this.ctx.fillStyle = 'blue'
    this.ctx.fillRect(elem.x, elem.y, elem.width, elem.height) 
  })     
  }

  
    

  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.meatball.moveLeft();
          break;
        case 'ArrowRight':
          this.meatball.moveRight();
          break;
        default:
          break;
      }
    });
  }

  _update() {
    this._drawEnemy()
  //  this._drawScreen()  
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._generateEnemies();
    this._update();
  }
}

