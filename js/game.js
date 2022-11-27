class Game{
  constructor(context) {
    this.ctx = context;
  }

  _drawScenery(){
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(0, 520, 1000, 80)
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
    this._drawScenery()
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }
}