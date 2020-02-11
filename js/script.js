// 0 est un mur, 1 c'est le sol, 2 c'est un bonbon 
var grille = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0 ], 
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0 ],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0 ],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0 ], 
    [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0 ],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0 ],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0 ],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0 ],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0 ],
    [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2 ],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0 ],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0 ],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0 ],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0 ],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0 ],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0 ],
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0 ],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0 ],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0 ],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0 ], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

]

var PacMan = {
    ligne : 10,
    col : 9,
    direction : 0
};

var _grille = document.querySelector('#grille');

function initGrille() {
   
   _grille.innerHTML = "";
   _grille.style.gridTemplateColumns = 'repeat('+grille[0].length+', 2vw)';
   _grille.style.gridTemplateRows = 'repeat('+grille.length+', 2vw)';

    for(let ligne in grille) {
            grille[ligne];
        for(let col in grille[ligne]) {
           let cellule = grille[ligne][col];
           let monElem = document.createElement("div");

           if(cellule == 0) {
            monElem.classList.add("mur");
        } else if(cellule == 1) {
            monElem.classList.add("sol");
        } else if(cellule == 2) {
            monElem.classList.add("bonbon");
        }
        monElem.style.gridRow = (+ligne) + 1;
        monElem.style.gridColumn = (+col) + 1;

            _grille.append(monElem);
        };
    };

    
}




function bougePacman() {
    let _pacman = document.createElement('div');
    _pacman.classList.add('pacmanman');
    _pacman.style.zIndex = 2;
    console.log(_pacman)
   _pacman.style.gridRow = (+PacMan.ligne) + 1;
   _pacman.style.gridColumn = (+PacMan.col) + 1;
   _grille.append(_pacman);

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
// COMPORTEMENT COULOIR
   if(PacMan.col == 19 && PacMan.ligne == 10 && PacMan.direction == 0) {
    PacMan.col = 0;
    } else if (PacMan.col == -1 && PacMan.ligne == 10 && PacMan.direction == 2) {
    PacMan.col = grille[0].length-1;
    }
//TEST COLLISION


}


function boucleRefresh() {
    initGrille();
    bougePacman();
    setTimeout(boucleRefresh, 300);
}

boucleRefresh();

document.onkeypress = function(event) {
    console.log(event.key);
    switch(event.key)
    {
        case "e":
        case "E":
            PacMan.direction=1;
            break;
        case "s":
        case "S":
            PacMan.direction=2;
            break;
        case "d":
        case"D":
            PacMan.direction=3;
            break;
        case "f":
        case "F":
            PacMan.direction=0;
            break;

    
    }
}