class Game {
  constructor(context) {
    this.ctx = context;
    this.enemies = [];
    this.inmortal =[];
    this.generateInterval = null;
    this.player = new Player();
    this.points = 0;
    this.timer = 30;
    this.generateTimer = undefined;
    this.youWin = undefined;
    this.winPageSound = new sound("./sounds/page-win.mp3");
    this.losePage = new sound("./sounds/lose-page.mp3");
    this.pageStart = new sound("./sounds/True-Avidity-start.m4a");
    this.shotEnemy = new sound("./sounds/shot.wav");
    this.explosionImage = new Image();
    this.explosionImage.src = "./img/explotion11.png";
  }

  
  _generateEnemies() {
    this.generateInterval = setInterval(() => {
      const newEnemies = new Enemies();
      newEnemies._appearEnemy();
      this.enemies.push(newEnemies);
      setTimeout(() => newEnemies._disappearEnemy(), 500);
      setTimeout(
        () => this.enemies.splice(this.enemies.indexOf(newEnemies), 1),
        2000
      );
      clearInterval(this._generateEnemies);
    }, 1000);
  }
  

  // function that draw the enemies
  _drawEnemy() {
    this.enemies.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
    });
  }
  
  

  checkCollison() {
    this.enemies.forEach((enemy, index) => {
      if (
        this.player.x >= enemy.x &&
        this.player.x <= enemy.x + enemy.width &&
        this.player.y >= enemy.y &&
        this.player.y <= enemy.y + enemy.height
      ) {
        this.points++;
        this.shotEnemy.play();
        this._createExplosion(enemy.x, enemy.y); 
        Destroy(enemy.gameObject);
        this.enemies.splice(index, 1);
      }
    });
  }

  _createExplosion(x, y) {
    const explosion = {
      x: x,
      y: y,
      width: 270,
      height: 270,
      image: this.explosionImage,
    };
    this.enemies.push(explosion);
  
    setTimeout(() => {
      this.enemies.splice(this.enemies.indexOf(explosion), 1);
    }, 150);
  }
  

  _assignClickMouse() {
    canvas.addEventListener("click", (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.player.x = x;
      this.player.y = y;
      this.checkCollison();
    });
  }
  
  _writeScore() {
    this.ctx.fillStyle = "black";
    this.ctx.font = "30px san-serif";
    this.ctx.fillText(`Score: ${this.points}`, 550, 40);
  }

  _timerGame() {
    this.generatorTimer = setInterval(() => {
      this.timer--;
    }, 1000);
  }
  _writeTimer() {
    this.ctx.fillStyle = "black";
    this.ctx.font = "30px san-serif";
    this.ctx.fillText(`Timer: ${this.timer}`, 400, 40);
  }

  _gameOver() {
    if (this.timer <= 0) {
      clearInterval(this.generateInterval);
      const losePage = document.getElementById("lose-page");
      losePage.style = "display: flex";
      const canvas = document.getElementById("canvas");
      canvas.style = "display: none";
      this.losePage.play();
    }
  }
  _win() {
    if (this.points >= 20) {
      clearInterval(this.youWin);
      clearInterval(this.generatorTimer);
      const winPage = document.getElementById("win-page");
      winPage.style = "display: flex";
      const canvas = document.getElementById("canvas");
      canvas.style = "display: none";
      this.winPageSound.play();
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
    this.pageStart.play();
  }
}
