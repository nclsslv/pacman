class Fantome {
    ligne;
    col;
    direction;
    couleur;
    constructor(couleur) {
        this.couleur = couleur;
        this.ligne = 11;
        this.col = 9;
        this.direction = 0;
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    bougeFantome() {
        this.direction = this.getRandomInt(4);
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
        this.fantomeCollision();
    }
    displayFantome() {
        {
            let _fantomevert = document.createElement('div');
            _fantomevert.classList.add(this.couleur);
            _fantomevert.style.zIndex = 2;
            _fantomevert.style.gridRow = (+this.ligne);
            _fantomevert.style.gridColumn = (+this.col);
            _grille.append(_fantomevert);
            
            }
    }
    fantomeCollision() {
        if (this.col >= 19 && this.ligne == 11 && this.direction == 0) {
            this.col = 1;
            }
        
     
        if (this.col <= 1 && this.ligne == 11 && this.direction == 2) {
         this.col = 19;
         }
    
        if (this.direction == 0) {
            if (grille[this.ligne-1][this.col-1] == 0 ) {
                this.col--;
            }
    
         } else if (this.direction == 1) {
            if (grille[this.ligne-1][this.col-1] == 0) {
                this.ligne++;
            }
    
        } else if (this.direction == 2) {
            if (grille[this.ligne-1][this.col-1] == 0 || grille[this.ligne-1][this.col-1] == 3 ) {
                this.col++;
            }
    
        } else if (this.direction == 3) {
            if (+grille[this.ligne-1][this.col-1] == 0) {
                this.ligne--;
            }
        }
    
        if (this.col == PacMan.col && this.ligne == PacMan.ligne) {
            score = 0;
            document.location.reload(true);
        }
    
    }
}