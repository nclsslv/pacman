class Pacman {
    ligne;
    col;
    direction;
    constructor(){
        this.ligne = 5;
        this.col = 2;
        this.direction = 0;
    }
    bougePacman() {
        if(PacMan.direction == 0) {
            PacMan.col++;
            
        } else if(PacMan.direction == 1) {
            PacMan.ligne--;
       
        } else if(PacMan.direction == 2) {
            PacMan.col--;
        } else if(PacMan.direction == 3) {
            PacMan.ligne++;
        } else if (PacMan.direction == 0 && cellule == 0) {
             PacMan.col--;
        } 
        
        if (PacMan.col == 20 && PacMan.ligne == 11 && PacMan.direction == 0) {
                this.col=1;
                this.ligne=11;
                this.direction= 0;
        }
     
        if (PacMan.col == 0 && PacMan.ligne == 11 && PacMan.direction == 2) { 
                this.col=19;
                this.ligne=11;
                this.direction=2;
         
     }
     
     testCollision();
     bonbons();
     
     let _pacman = document.createElement('div');
     if (PacMan.direction == 0) {
         _pacman.classList.add('pacmanman');
     } else if (PacMan.direction == 1) {
         _pacman.classList.add('pacmanmanup');
     } else if (PacMan.direction == 2) {
         _pacman.classList.add('pacmanmanleft');
     } else if (PacMan.direction == 3) {
         _pacman.classList.add('pacmanmandown');
     }
     _pacman.classList.add('pacmanman');
     _pacman.style.zIndex = 2;
     
     _pacman.style.gridRow = (+PacMan.ligne);
     _pacman.style.gridColumn = (+PacMan.col);
     _grille.append(_pacman);
     console.log(PacMan);
     }
}