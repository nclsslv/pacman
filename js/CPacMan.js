class Pacman {
    ligne;
    col;
    direction;

    constructor(){
        this.ligne = 9;
        this.col = 4;
        this.direction = 0;
    }

    bougePacman() {
        if(this.direction == 0) {
            this.col++;
            
        } else if(this.direction == 1) {
            this.ligne--;
       
        } else if(this.direction == 2) {
            this.col--;
        } else if(this.direction == 3) {
            this.ligne++;
        } else if (this.direction == 0 && cellule == 0) {
             this.col--;
        } 
        
        if (this.col == 20 && this.ligne == 11 && this.direction == 0) {
                this.col=1;
                this.ligne=11;
                this.direction= 0;
        }
     
        if (this.col == 0 && this.ligne == 11 && this.direction == 2) { 
                this.col=19;
                this.ligne=11;
                this.direction=2;
         
     }

     if (this.col == 1 && this.ligne == 20 && this.direction == 2) { 
        this.col=19;
        this.ligne=9;
        this.direction=2;
     }

     if (this.col == 19 && this.ligne == 9 && this.direction == 0) { 
        this.col=1;
        this.ligne=20;
        this.direction=0;
     }
     
     this.testCollision();
     this.bonbons();
     
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
     
    testCollision() {

        if (this.direction == 0) {
            if (grille[this.ligne-1][this.col-1] == 0) {
                this.col--;
            }
         } else if (this.direction == 1) {
            if (grille[this.ligne-1][this.col-1] == 0) {
                this.ligne++;
            }
        } else if (this.direction == 2) {
            if (grille[this.ligne-1][this.col-1] == 0) {
                this.col++;
            }
        }else if (this.direction == 3) {
            if (grille[this.ligne-1][this.col-1] == 0) {
                this.ligne--;
            }
        }
    
    }

    bonbons(){ 
            if (grille[this.ligne-1][this.col-1] == 2) {
                grille[this.ligne-1][this.col-1] = 1;
                score++;
                _score2.innerHTML = 'Votre score : ' + score;
            } 
            if (score == 193) {
                window.alert("YOUPI")
            } 
    }
}