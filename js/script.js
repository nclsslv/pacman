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


/*var PacMan = {
    ligne : 17,
    col : 9,
    direction : 0
};*/


var PacMan = new Pacman();

var FantomeRouge = {
    ligne : 11,
    col: 9,
    direction : 2
};

var FantomeVert = {
    ligne : 11,
    col: 9,
    direction : 2
};

var FantomeOrange = {
    ligne : 11,
    col: 9,
    direction : 2
};

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
        }
        monElem.style.gridRow = (+ligne) + 1;
        monElem.style.gridColumn = (+col) + 1;

            _grille.append(monElem);
        };
    };    
}

PacMan.bougePacman();

function testCollision() {

    if (PacMan.direction == 0) {
        if (grille[PacMan.ligne-1][PacMan.col-1] == 0) {
            PacMan.col--;
        }
     } else if (PacMan.direction == 1) {
        if (grille[PacMan.ligne-1][PacMan.col-1] == 0) {
            PacMan.ligne++;
        }
    } else if (PacMan.direction == 2) {
        if (grille[PacMan.ligne-1][PacMan.col-1] == 0) {
            PacMan.col++;
        }
    }else if (PacMan.direction == 3) {
        if (grille[PacMan.ligne-1][PacMan.col-1] == 0) {
            PacMan.ligne--;
        }
    }

    }

function bonbons(){
// COMPTER LES BONBONS DYNAMIQUEMENT



    if (grille[PacMan.ligne-1][PacMan.col-1] == 2) {
        grille[PacMan.ligne-1][PacMan.col-1] = 1;
        score++;
        _score2.innerHTML = 'Votre score : ' + score;
    } 
    if (score == 191) {
        window.alert("YOUPI")
    } 
}

function boucleRefresh() {
    initGrille();
    PacMan.bougePacman();
    bougeFantome(FantomeRouge);
    bougeFantome(FantomeVert);
    bougeFantome(FantomeOrange);
    displayFantomeRouge();
    displayFantomeVert();
    displayFantomeOrange();
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






function displayFantomeVert() {
    let _fantomevert = document.createElement('div');
_fantomevert.classList.add('fantomevert');
_fantomevert.style.zIndex = 2;

_fantomevert.style.gridRow = (+FantomeVert.ligne);
_fantomevert.style.gridColumn = (+FantomeVert.col);
_grille.append(_fantomevert);

}

function displayFantomeRouge() {
    let _fantomerouge = document.createElement('div');
_fantomerouge.classList.add('fantomerouge');
_fantomerouge.style.zIndex = 2;

_fantomerouge.style.gridRow = (+FantomeRouge.ligne);
_fantomerouge.style.gridColumn = (+FantomeRouge.col);
_grille.append(_fantomerouge);

}

function displayFantomeOrange() {
    let _fantomeorange = document.createElement('div');
_fantomeorange.classList.add('fantomeorange');
_fantomeorange.style.zIndex = 2;

_fantomeorange.style.gridRow = (+FantomeOrange.ligne);
_fantomeorange.style.gridColumn = (+FantomeOrange.col);
_grille.append(_fantomeorange);

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function bougeFantome(Fantome) {
   
    Fantome.direction = getRandomInt(4);
    if(Fantome.direction == 0) {
        Fantome.col++;
    } else if(Fantome.direction == 1) {
        Fantome.ligne--;
    } else if(Fantome.direction == 2) {
        Fantome.col--;
    } else if(Fantome.direction == 3) {
        Fantome.ligne++;
    } else if (Fantome.direction == 0 && cellule == 0) {
         Fantome.col--;
    } 
    fantomeCollision(Fantome);
    }
    


function fantomeCollision(Fantome) {
    if (Fantome.col >= 19 && Fantome.ligne == 11 && Fantome.direction == 0) {
        Fantome.col = 1;
        }
    
 
    if (Fantome.col <= 1 && Fantome.ligne == 11 && Fantome.direction == 2) {
     Fantome.col = 19;
     }

    if (Fantome.direction == 0) {
        if (grille[Fantome.ligne-1][Fantome.col-1] == 0) {
            Fantome.col--;
        }

     } else if (Fantome.direction == 1) {
        if (grille[Fantome.ligne-1][Fantome.col-1] == 0) {
            Fantome.ligne++;
        }

    } else if (Fantome.direction == 2) {
        if (grille[Fantome.ligne-1][Fantome.col-1] == 0) {
            Fantome.col++;
        }

    } else if (Fantome.direction == 3) {
        if (grille[Fantome.ligne-1][Fantome.col-1] == 0) {
            Fantome.ligne--;
        }
    }

    if (Fantome.col == PacMan.col && Fantome.ligne == PacMan.ligne) {
        score = 0;
        document.location.reload(true);
    }

    }
