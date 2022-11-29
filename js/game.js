class Game{
  constructor(context) {
    this.ctx = context;
    this.enemies = [];  
    this.generateInterval = null; 
  }

_generateEnemies(){
  this.generateInterval = setInterval(() => {
    const newEnemies = new Enemies();
    newEnemies._appearEnemy()
    this.enemies.push(newEnemies);
  }, 1000)
}  

  _drawScreen (){
    //  escenario
    this.ctx.fillStyle = 'orange';
    this.ctx.fillRect(0, 500, 1000, 100)
  }

  // enemy  
  _drawEnemy(){  
    this.enemies.forEach((elem) => {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(elem.x, elem.x, elem.width, elem.height) 
    }) 
    
  }

  // _appearEnemy() {
  //   this.ctx.clearRect(0, 0, 1000, 600)
  //   this.enemy.y = this.enemy.y - 5;
  //    if(this.enemy.y < 400){
  //    this.enemy.y = 500 === this.enemy.height;
  //    } 
  //   this._drawScreen()
  // }
    

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
    this._drawScreen()  
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._generateEnemies();
    this._update();
  }
}