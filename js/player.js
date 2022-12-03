class Player {
    constructor(){
        this.x = undefined;
        this.y = undefined;
    }
   
   _getMouse(){
    function getMousePosition(canvas, e){
        return {
            x: e.clientX,
            y: e.clientY 
        }
    }
    let canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.canvas.addEventListener('mousemove', function(e){
        let mousePosition = getMousePosition(canvas, e)
        this.x = mousePosition.x - ctx.canvas.offsetLeft;
        this.y = mousePosition.y - ctx.canvas.offsetTop;
    // let message = 'Mouse position: ' + mousePosition.x +',' + mousePosition.y;
   //  console.log(message)
    })
   }


   
}
