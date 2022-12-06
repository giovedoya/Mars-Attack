class Game{
  constructor(context) {
    this.ctx = context;
    this.enemies = [];  
    this.generateInterval = null;
    this.player = new Player();
    this.points = 0;
    this.timer = 30;
    this.generateTimer = undefined;
    this.youWin = undefined;
  }

_generateEnemies(){
  this.generateInterval = setInterval(() => {
  const newEnemies = new Enemies();
  newEnemies._appearEnemy();
  this.enemies.push(newEnemies);
  setTimeout(()=>newEnemies._disappearEnemy(), 1000);
  setTimeout(()=>this.enemies.splice(this.enemies.indexOf(newEnemies),1), 1500);
  clearInterval(this._generateEnemies)  
}, 1000)
}

  // function that draw the enemies  
_drawEnemy(){  
   this.enemies.forEach((elem) => { 
    this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
  })     
  }   
  
 
  checkCollison(){
    this.enemies.forEach(enemy => {
    if((this.player.x >= enemy.x  && this.player.x <= enemy.x + enemy.width)
    && (this.player.y >= enemy.y && this.player.y <= enemy.y + enemy.height)){     
      this.points++;
    }
  })  
} 
_assignClickMouse(){
    canvas.addEventListener('click', (e)=> { 
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top; 
      this.player.x = x;
      this.player.y = y; 
      this.checkCollison()      
  })

}
  _writeScore(){
    this.ctx.fillStyle = 'black';
    this.ctx.font = '20px Verdana';
    this.ctx.fillText(`🚀🚀🚀 Score: ${this.points}`, 700, 30)
  }

  _timerGame(){
    this.generatorTimer = setInterval (() => {
    this.timer--;
    }, 1000) 
  }
  _writeTimer(){
    this.ctx.fillStyle = 'black';
    this.ctx.font = '20px Verdana'
    this.ctx.fillText(`⌛ Timer: ${this.timer}`, 500, 30)
  }

  _gameOver(){
    if(this.timer <= 0){
      clearInterval(this.generateInterval)
      const losePage = document.getElementById('lose-page')
      losePage.style = 'display: flex';
      const canvas = document.getElementById('canvas')
      canvas.style = 'display: none';
    }    
  }
 _win(){
  if(this.points >= 20){
    clearInterval(this.youWin)
    clearInterval(this.generateInterval)
    const winPage = document.getElementById('win-page')
    winPage.style = 'display: flex';
    const canvas = document.getElementById('canvas')
    canvas.style = 'display: none';   
  }
 }


  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();    
    this._drawEnemy();
    this._writeScore(); 
    this._writeTimer();    
    this._gameOver();
    this._win();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this.checkCollison();
    this._assignClickMouse();  
    this._timerGame();
    this._generateEnemies();  
    this._update();
  }
}

