var grille = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0 ], 
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0 ],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0 ],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0 ], 
    [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0 ],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0 ],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0 ],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 3 ],
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
    [3, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0 ],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0 ], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

]

var PacMan = new Pacman();
var FantomeRouge = new Fantome("fantomerouge");
var FantomeVert = new Fantome("fantomevert");
var FantomeOrange = new Fantome("fantomeorange");
var FantomeBleu = new Fantome("fantomebleu");

var score = 0;

var _grille = document.querySelector('#grille');

var _score2 = document.querySelector('#score');

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
        } else if(cellule == 3) {
            monElem.classList.add("mur2");
        }
        monElem.style.gridRow = (+ligne) + 1;
        monElem.style.gridColumn = (+col) + 1;

            _grille.append(monElem);
        };
    };    
}



function boucleRefresh() {
    initGrille();
    PacMan.bougePacman();
    FantomeRouge.bougeFantome();
    FantomeVert.bougeFantome();
    FantomeOrange.bougeFantome();
    FantomeBleu.bougeFantome();
    FantomeRouge.displayFantome();
    FantomeVert.displayFantome();
    FantomeOrange.displayFantome();
    FantomeBleu.displayFantome();
    setTimeout(boucleRefresh, 100);
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
