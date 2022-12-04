class Game{
  constructor(context, x, y) {
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
  setTimeout(()=>newEnemies._disappearEnemy(), 1000);
  setTimeout(()=>this.enemies.splice(this.enemies.indexOf(newEnemies),1), 2000);
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
    this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
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
  
  // _clickEnemy(){    
  // //  const distance =
  // //  Math.sqrt(
  // //  ( (xmouse - this.x ) * (xmouse - this.x ) )
  // //  + 
  // //  ( (ymouse - this.y ) * (ymouse - this.y ) )
  // //  );
  // //  console.log(distance)
  //  if((this.x >= this.x  && this.x <= this.x + this.width) &&
  //   (this.y >= this.y && this.y <= this.y + this.height)){  
  //     this.points++    
  //   } else{
  //   } console.log(this.points)
  // }

  _assignClickMouse(){
    canvas.addEventListener('click', (e)=> { 
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      //console.log(this._clickEnemy())
      this.checkCollison(x, y)    
      this.points++      
    })
  }
 
  checkCollison(){
    this.enemies.forEach((enemy) => {
    if((this.x >= enemy.x  && this.x <= enemy.x + enemy.width)
    && (this.y >= enemy.y && this.y <= enemy.y + enemy.height)){   
      this._assignClickMouse()           
    }  return true      
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
  //  this._drawScreen();
    this.player._getMouse();
    this._assignClickMouse
    this._writeScore();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    //this._clickEnemy(); 
    this.checkCollison();   
    this._ass//
    this._generateEnemies();
    this._update();
  }
}

