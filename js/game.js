class Game{
  constructor(context) {
    this.ctx = context;
    this.enemies = [];  
    this.generateInterval = null;
    this.player = new Player();
    this.points = 0;
    this.timer = 0;
  }

_generateEnemies(){
  this.generateInterval = setInterval(() => {
    const newEnemies = new Enemies();
    newEnemies._appearEnemy();
    this.enemies.push(newEnemies);
    newEnemies._disappearEnemy(); 
    clearInterval(this._generateEnemies)  
  }, 2000)
  console.log('que pasa')
}  

// Function that draw the scenary
_drawScreen (){
    //  escenario
    this.ctx.fillStyle = 'orange';
    this.ctx.fillRect(0, 500, 1000, 100)
  }

  // function that draw the enemies  
_drawEnemy(){  
   this.enemies.forEach((elem) => {
    this.ctx.fillStyle = 'blue'
    this.ctx.fillRect(elem.x, elem.y, elem.width, elem.height) 
  })     
  }    

  // _assignControls() {
  //   // Controles del teclado
  //   document.addEventListener('keydown', (event) => {
  //     switch (event.code) {
  //       case 'ArrowLeft':
  //         this.meatball.moveLeft();
  //         break;
  //       case 'ArrowRight':
  //         this.meatball.moveRight();
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }

  _assignClickMouse(){
    document.addEventListener('click', function (e){  
      console.log(e.x, e.y)   
    //  const detecterEnemy  = this.ctx.getImageData(e.x, e.y, 1, 1)
     // console.log(detecterEnemy)
    })
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    this._drawEnemy()
    //this._drawScreen()
   this.player._getMouse();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignClickMouse();
    this._generateEnemies();
    this._update();
  }
}

