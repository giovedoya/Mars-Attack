class Enemies{
constructor(){
    this.x =  Math.floor(Math.random() * 900);
    this.y = 600;
    this.width = 100;
    this.height = 200;
    this.appearInterval = undefined;
    this.disappearInterval = undefined;
    this.image = enemigos[Math.floor(Math.random() * enemigos.length )]
}

_appearEnemy(){
  this.appearInterval = setInterval(() => {   
    if(this.y < 400 ){
      clearInterval(this.appearInterval)
    }
    this.y -= 5;
    }, 3)    
}

_disappearEnemy(){
    this.disappearInterval = setInterval(() => {
        if(this.y > 600){
         clearInterval(this.disappearInterval)
        }              
        this.y = this.y + 5;
        }, 10)     
       // console.log('que pasa')
        this.intervalId = setTimeout(this._disappearEnemy, 2000)
    }    
}

// _appearAndDisappear(){
//     this.appearInterval = setInterval(() =>{
//         if(this.y < 400){
//             clearInterval(this.appearInterval)
//         }
//         this.y -=5;
//     }, 10)

// }

// _appearEnemy(){
//     this.ctx.clearRect(0, 0, 1000, 600)
//     this.enemies.y = this.enemies.y + 10;
//     if(this.enemies.y > 400){
//       this.enemies.y = 550 - this.enemy.height;
//     }
// }
// }
    // this.ctx.clearRect(0, 0, 1000, 600)
    // this.enemy.y = this.enemy.y + 10;
    // if(this.enemy.y > 400){
    //   this.enemy.y = 550 - this.enemy.height;
    // }
    // this._drawScreen()
  

   //setInterval(this._appearEnemy.bind(this), 20)
   // setInterval(this._disappearEnemy.bind(this), 1000)