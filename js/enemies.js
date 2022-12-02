class Enemies{
constructor(){
    this.x =  300 // Math.floor(Math.random() * 1000);
    this.y = 410;
    this.width = 100;
    this.height = 100;
    this.appearInterval = undefined;
    this.disappearInterval = undefined;
}

// _appearEnemy() {
//    this.appearInterval =  setInterval(() => { 
//    this.ctx.clearRect(0, 0, 1000, 600)
//     this.enemy.y = this.enemy.y - 5;
//      if(this.enemy.y < 400){
//      this.enemy.y = 500 === this.enemy.height;
//      } 
//  this._drawScreen()
//     }, 10)
//   }  

// _appearEnemy(){
//   this.appearInterval = setInterval(() => {   
//     if(this.y < 300 ){
//       clearInterval(this.appearInterval)
//     }
//     this.y -= 5;
//     }, 10)    
// }

_appearEnemy(){
    this.y > 200;
    this.y -= 5
    clearInterval(this.appearInterval)
}

_disappearEnemy(){
    this.disappearInterval = setInterval(() => {
        if(this.y > 400){
         clearInterval(this.disappearInterval)
        }              
        this.y = this.y - 10;
        }, 10)     
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