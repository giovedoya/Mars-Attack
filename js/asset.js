// // // enemies

const hero1 = new Image();
hero1.src = './img/guillen.png'

const hero2 = new Image();
hero2.src = './img/martians1.png'


const enemy3 = new Image();
enemy3.src = './img/martians1.png'

const enemy4 = new Image();
enemy4.src = './img/martians2.png'

const enemy5 = new Image();
enemy5.src = './img/martians3.png'

const enemigos = [hero1, hero2, enemy3, enemy4, enemy5]


function sound(src) { 
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() { 
      this.sound.play();
    };
    this.stop = function() {
      this.sound.pause();
    };
  }
