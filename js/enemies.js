class Enemies{
constructor(){
    this.x = Math.floor(Math.random() * 950);
    this.y = Math.floor(Math.random() * -100);
    this.width = 80;
    this.height = 180;
    this.appearInterval = undefined;
}

_appearEnemy(){
  this.appearInterval =  setInterval(() => { 
    if(this.y > 600){
        clearInterval(this.appearInterval)
    }       
    this.y = this.y + 1;
    }, 10)
}

}

  // _disappearEnemy(){
  //   this.ctx.clearRect(0, 0, 1000, 600)
  //   this.enemy.y = this.enemy.y + 10;
  //   if(this.enemy.y > 400){
  //     this.enemy.y = 550 - this.enemy.height;
  //   }
  //   this._drawScreen()
  // }

   //setInterval(this._appearEnemy.bind(this), 20)
   // setInterval(this._disappearEnemy.bind(this), 1000)