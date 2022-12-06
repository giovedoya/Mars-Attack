class Enemies{
constructor(){
    this.x =  Math.floor( Math.random() * 800);
    this.y = 600;
    this.width = 200 ;
    this.height = 300;
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
        this.intervalId = setTimeout(this._disappearEnemy, 2000)
    }    

// _assignRole(){
//   if(Math.floor(Math.random()* 3 ) > 1){
//     this.role === 'bad';
//   } else{
//     this.role = 'hero';
//   }
// }
// _assignImage(){
//   if(this.role === 'bad'){
//     this.image = enemy3;
//   } else {
//     this.image = enemigos[Math.floor(Math.random() * enemigos.length)]
//   }
// }

}