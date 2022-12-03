class Game{
  constructor(context) {
    this.ctx = context;
    this.enemies = [];  
    this.generateInterval = null;
    this.player = new Player();
    this.points = 0;
    this.timer = 0;
  }

// _generateEnemies(){
//   this.generateInterval = setInterval(() => {
//     const newEnemies = new Enemies();
//     newEnemies._appearEnemy();
//     this.enemies.push(newEnemies);
//     newEnemies._disappearEnemy(); 
//     clearInterval(this._generateEnemies)  
//   }, 2000)
//   console.log('que pasa')
// }  

_generateEnemies(){
  this.generateInterval = setInterval(() => {
  const newEnemies = new Enemies();
  newEnemies._appearEnemy();
  this.enemies.push(newEnemies);
  //newEnemies._disappearEnemy(); 
  setTimeout(()=>newEnemies._disappearEnemy(), 1000);
  // se elimina del array un enemigo
  setTimeout(()=>this.enemies.splice(this.enemies.indexOf(newEnemies),1), 2000);
  //  console.log(this.enemies)
  clearInterval(this._generateEnemies)  
}, 1000)
}


// Function that draw the scenary
_drawScreen (){
    //  escenario
    this.ctx.fillStyle = 'orange', 
    this.ctx.fillRect(0, 520, 1000, 80)
  }

  // function that draw the enemies  
_drawEnemy(){  
   this.enemies.forEach((elem) => {
    // this.ctx.fillStyle = 'blue'
    //  this.ctx.fillRect(elem.x, elem.y, elem.width, elem.height) 
    
    this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
  //   console.log('que pasa')
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
    document.addEventListener('click', (e)=> {  
    // console.log(e.x, e.y) 
    this.checkCollison()
      this.points++
      console.log(this.points)
      //const detecterEnemy  = this.ctx.getImageData(e.x, e.y, 1, 1)
     // console.log(detecterEnemy)
    })
  }

  checkCollison(){
    this.enemies.forEach((enemy) => {
    if((this.player.x >= enemy.x  && this.player.x <= enemy.x + enemy.width)
    && (this.player.y >= enemy.y && this.player.y <= enemy.y + enemy.height)){        
    }    
   // console.log('colision')
  })
}


  _writeScore(){
    this.ctx.fillStyle = 'black';
    this.ctx.font = '20px Verdana';
    this.ctx.fillText(`Score: ${this.points}`, 800, 80)
  }

  // _gameOver(){

  // }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    this._drawEnemy();
    this._drawScreen();
    this.player._getMouse();
   // this.checkCollison();
   // this._writeScore();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignClickMouse();
    this._generateEnemies();
    this._update();
  }
}

