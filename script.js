
let gNumRow = 0;
let gNumCol = 0;

LignesElec = [
    [
        {
            picto: 'blank.png',
            texte: '',
            span: 3
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 0
        },
        {
            picto: 'blank.png', 
            texte: '',
            span: 0
        },
        {
            picto: 'radiator.png',
            texte: 'Rez de chaussée sud',
            span: 1
        },
        {
            picto: 'radiator.png',
            texte: 'Rez de chaussée nord',
            span: 1
        },
        {
            picto: 'radiator.png',
            texte: 'Chambre 1er étage sud-ouest',
            span: 1
        },
        {
            picto: 'radiator.png',
            texte: 'Salle de bain 1er étage',
            span: 1
        },
        {
            picto: 'radiator.png',
            texte: 'Chambres 1er étage nord-est et nord-ouest',
            span: 1
        },
        {
            picto: 'radiator.png',
            texte: 'Chambre 1er étage sud-est',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        }
    ],
    [
        {
            picto: 'blank.png',
            texte: '',
            span: 3
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 0
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 0
        },
        {
            picto: 'frying-pan.png',
            texte: 'Cuisine - Plaque de cuisson',
            span: 1
        },
        {
            picto: 'washing-machine.png',
            texte: 'Étage - Lave linge',
            span: 1
        },
        {
            picto: 'dishwasher.png',
            texte: 'Cuisine - Lave vaisselle',
            span: 1
        },
        {
            picto: 'wall-socket.png',
            texte: 'Gaine technique',
            span: 1
        },
        {
            picto: 'fan-head.png',
            texte: 'Ventilation maison',
            span: 1
        },
        {
            picto: 'light.png',
            texte: 'Escalier et paliers',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        }
    ],
    [
        {
            picto: 'blank.png',
            texte: '',
            span: 2
        },
        {
            picto: 'blank.png', 
            texte: '',
            span: 0,
        },
        {
            picto: 'cooker.png',
            texte: 'Cuisine - Four',
            span: 1
        },
        {
            picto: 'wall-socket.png',
            texte: 'Rez de chaussée - sud-est',
            span: 1
        },
        {
            picto: 'wall-socket.png',
            texte: 'Rez de chaussée - nord',
            span: 1
        },
        {
            picto: 'wall-socket.png',
            texte: 'Chambre 1er étage - sud-est',
            span: 1
        },
        {
            picto: 'lights.png',
            texte: 'Extérieur et cave',
            span: 1
        },
        {
            picto: 'light.png',
            texte: 'Étage',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        }
    ],
    [
        {
            picto: 'blank.png',
            texte: '',
            span: 2
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 0
        },
        {
            picto: 'wall-socket.png',
            texte: 'Chambre 1er étage - nord-est et nord-ouest',
            span: 1
        },
        {
            picto: 'wall-socket.png',
            texte: '1er étage Chambre sud-ouest, salle de bain, palier',
            span: 1
        },
        {
            picto: 'wall-socket.png',
            texte: 'Rez de chaussée sud-ouest',
            span: 1
        },
        {
            picto: 'light.png',
            texte: 'Rez de chaussée',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'water-heater.png',
            texte: 'Chauffe eau (cave)',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        },
        {
            picto: 'blank.png',
            texte: '',
            span: 1
        }
    ]
];

function merge(){
    let cell = gNumCol;
    if (LignesElec[gNumRow][cell].span == 0) {
        while(cell >= 0 && LignesElec[gNumRow][--cell].span == 0);
    }
    if (cell <= 0) {
        return;
    }
    LignesElec[gNumRow][cell].span = 0;
    
    updateAfterSplitMerge();
}

function split() {
    if(LignesElec[gNumRow][gNumCol].span > 1) {
        LignesElec[gNumRow][gNumCol].span -= 1;
        let colonne = gNumCol + 1;
        LignesElec[gNumRow][colonne].span = 1;
    }
    else if(LignesElec[gNumRow][gNumCol].span == 0) {
        LignesElec[gNumRow][gNumCol].span = 1;
        let colonne = gNumCol;

    }
    updateAfterSplitMerge();
}

function updateAfterSplitMerge() {
    // Reprendre la ligne a l'envers, compter les cellules fusionnées et mettre a jour les valeurs
    nombreCellulesFusionnees=0;
    for(let colonne = LignesElec[gNumRow].length - 1 ; colonne > -1 ; --colonne){
        if(LignesElec[gNumRow][colonne].span == 0) {
            nombreCellulesFusionnees++;
        }
        else {
            if(nombreCellulesFusionnees > 0) {
                LignesElec[gNumRow][colonne].span = nombreCellulesFusionnees + 1;
            }
            else {
                LignesElec[gNumRow][colonne].span = 1;
            }
            nombreCellulesFusionnees = 0;
        }
    }
    updateTable();
}

function Select(ligne, colonne) {
    // Enleve l'ancien indicateur
    document.getElementById('indic_'+gNumRow+'_'+gNumCol).innerHTML = '';
    // Stocke les nouvelles valeur de position
    gNumRow = ligne;
    gNumCol = colonne;

    let mergeDisabled = false;
    let cell = colonne;
    if(LignesElec[ligne][cell].span == 0 || cell == 0) {
        while(cell > 0 && LignesElec[ligne][--cell].span == 0);
        if (cell <= 0) {
            mergeDisabled = true;
        }
    }
    document.getElementById('btnMerge').disabled = mergeDisabled;
    document.getElementById('btnSplit').disabled = (LignesElec[ligne][colonne].span == 1);

    // Replace l'indicateur de position
    document.getElementById(`indic_${ligne}_${colonne}`).innerHTML = '^';
    // Donne le focus au bon élément
    let elem = document.getElementById(`${ligne}_${colonne}`);
    while (!elem && --colonne >= 0) {
        elem = document.getElementById(`${ligne}_${colonne}`);
    }
    if (elem) {
        elem.getElementsByTagName('div')[0].focus();
    }
}

function SelectCellule(e) {
    let coords = e.target.closest("td").id.split('_');
    Select(parseInt(coords[0], 10), parseInt(coords[1], 10));
}

function sauveTexte(e) {
    let target = e.target;
    let coords = target.closest("td").id.split('_');
    LignesElec[coords[0]][coords[1]].texte = target.innerText;
}
function updateTable() {
    el = document.getElementById('myTable');
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
    let table = document.createElement("table");
    table.classList.add("ligneTableau");
    let tbody = document.createElement("tbody");
    for(numRow = 0 ; numRow < LignesElec.length ; ++numRow) {
        let ligne = document.createElement("tr");
        for(numCol = 0 ; numCol < LignesElec[numRow].length ; ++numCol){
            if(LignesElec[numRow][numCol].span != 0){
                let cellule = document.createElement("td");
                cellule.classList.add("Cell", "CellTableau");
                cellule.id = `${numRow}_${numCol}`;
                cellule.addEventListener("click", SelectCellule);
                cellule.colSpan = LignesElec[numRow][numCol].span;
                if (LignesElec[numRow][numCol].picto != "blank.png") {
                    let picto = document.createElement("img");
                    if (LignesElec[numRow][numCol].picto.startsWith("data:")) {
                        picto.src = LignesElec[numRow][numCol].picto;
                    }
                    else {
                        picto.src = `pict/${LignesElec[numRow][numCol].picto}`;
                    }
                    cellule.appendChild(picto);
                }

                span = document.createElement("div");
                span.innerHTML = LignesElec[numRow][numCol].texte;
                span.contentEditable = true;
                span.addEventListener("input", sauveTexte);
                cellule.appendChild(span);
                ligne.appendChild(cellule);
            }
        }
        tbody.appendChild(ligne);
        let ligneEspace = document.createElement("tr");
        ligneEspace.classList.add("TRSpacer");
        for(numCol = 0 ; numCol < LignesElec[numRow].length ; ++numCol) {
            let td = document.createElement("td");
            td.classList.add("Cell", "CellEspace");
            td.id = `${numRow}_${numCol}_td`;
            td.addEventListener("click", SelectCellule);
            let indicateur = document.createElement("div");
            indicateur.setAttribute("data-html2canvas-ignore", true);
            indicateur.id = `indic_${numRow}_${numCol}`;
            td.appendChild(indicateur);
            ligneEspace.appendChild(td);
        }
        tbody.appendChild(ligneEspace);
    }

    table.appendChild(tbody);
    document.getElementById('myTable').appendChild(table);
}

function RAZ(){
    if(confirm('Effacer tout le tableau ?')){
        for(numRow = 0 ; numRow < LignesElec.length ; ++numRow){
            for(numCol = 0 ; numCol < LignesElec[numRow].length ; ++numCol) {
                LignesElec[numRow][numCol].picto = 'blank';
                LignesElec[numRow][numCol].texte = '';
                LignesElec[numRow][numCol].span = 1;
            }
        }
        updateTable();
    }
}

function NextIdem(){
    let img = LignesElec[gNumRow][gNumCol].picto;
    let texte = LignesElec[gNumRow][gNumCol].texte;
    if(gNumCol < 12) {
        gNumCol++;
    }
    else {
        gNumCol = 0;
        gNumRow++;
    }
    LignesElec[gNumRow][gNumCol].picto = img;
    LignesElec[gNumRow][gNumCol].texte = texte;
    updateTable();
    Select(gNumRow,gNumCol);
}

function AddPicture(imgName){
    LignesElec[gNumRow][gNumCol].picto = imgName;
    updateTable();
}

function loadPicto() {
    imgList = [
        "air-conditioner.png",     "bath-fan.png",                 "bath-light.png",
        "ceiling-light.png",       "central-air-conditioning.png", "central-heating.png",
        "cooker-hood.png",         "cooker.png",                   "dishwasher.png",
        "electric-toothbrush.png", "fan-head.png",                 "fan.png",
        "fridge.png",              "frying-pan.png",               "garage.png",
        "hair-dryer.png",          "heating-automation.png",       "heating-room.png",
        "illumination.png",        "kitchen.png",                  "light-automation.png",
        "light-bulb.png",          "light.png",                    "lights.png",
        "microwave.png",           "office-phone.png",             "pc-on-desk.png",
        "radiator.png",            "smart-home-automation.png",    "spa.png",
        "stairs-down.png",         "stairs-up.png",                "thermometer-automation.png",
        "toaster-oven.png",        "tumble-dryer.png",             "wall-socket.png",
        "washing-machine.png",     "washing.png",                  "water-heater.png",
        "blank.png"
    ];

    let listePicto = document.getElementById("listePicto");
    imgList.forEach(imageName => {
        let image = document.createElement("img");
        image.src = `pict/${imageName}`;
        image.onclick = function() {AddPicture(imageName);};
        listePicto.insertBefore(image, listePicto.firstChild);
    });
}

/* drag and drop fun, from https://codepen.io/doughensel/pen/zGMmop */
function ajoutImage(fichier) {
	if( fichier.type === 'image/png' || 
        fichier.type === 'image/jpg' || 
        fichier.type === 'image/jpeg' ||
        fichier.type === 'image/gif' ||
        fichier.type === 'image/bmp'){
		let reader = new FileReader();
        let image = new Image();
		reader.readAsDataURL( fichier );
		reader.onload = function(newImage){
            let listePicto = document.getElementById("listePicto");
            let image = document.createElement("img");
            image.src = newImage.target.result;
            image.onclick = function() {AddPicture(newImage.target.result);};
            // listePicto.appendChild(image);
            listePicto.insertBefore(image, listePicto.firstChild);
		};
	}
}

var dragdrop = {
	init: function(elem){
		elem.setAttribute('ondrop', 'dragdrop.drop(event)');
		elem.setAttribute('ondragover', 'dragdrop.drag(event)' );
	},
	drop: function(e){
		e.preventDefault();
		let file = e.dataTransfer.files[0];
		ajoutImage(file);
	},
	drag: function(e){
		e.preventDefault();
	}
};

function changeNombreColonnes(e) {
    let nouvelleValeur = e.target.value;
    if (nouvelleValeur < LignesElec[0].length) {
        for (let i = 0; i < LignesElec.length; ++i) {
            LignesElec[i].pop();
        }
    }
    else {
        for (let i = 0; i < LignesElec.length; ++i) {
            LignesElec[i].push({picto: 'blank.png',texte: '',span: 1});
        }
    }
    updateTable();
}
function changeNombreLignes(e) {
    let nouvelleValeur = e.target.value;
    if (nouvelleValeur < LignesElec.length) {
            LignesElec.pop();
    }
    else {
        let nouvelleLigne = [];
        for (let i = 0; i < LignesElec[0].length; ++i) {
            nouvelleLigne.push({picto: 'blank.png',texte: '',span: 1});
        }
        LignesElec.push(nouvelleLigne);
    }
    updateTable();
}

function exportPDF() {
    html2canvas(window.document.getElementById("myTable")).then(function(canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('l');
        let margins = {
            top: 7,
            left: 7
        };
        pdf.addImage(imgData, 'JPEG', margins.top, margins.left);
        pdf.save("download.pdf");
    });
}

function ready() {
    updateTable();
    loadPicto();
    document.getElementById("btnMerge").addEventListener("click", merge);
    document.getElementById("btnSplit").addEventListener("click", split);
    document.getElementById("btnSuivantIdentique").addEventListener("click", NextIdem);
    document.getElementById("btnRAZ").addEventListener("click", RAZ);
    document.getElementById("btnExportPdf").addEventListener("click", exportPDF);
    Select(gNumRow, gNumCol);

    let rangeLignes = document.getElementById("rangeLignes");
    rangeLignes.value = LignesElec.length;
    rangeLignes.addEventListener("change", changeNombreLignes);
    let rangeColonnes = document.getElementById("rangeColonnes");
    rangeColonnes.value = LignesElec[0].length;
    rangeColonnes.addEventListener("change", changeNombreColonnes);

    dragdrop.init(document.getElementById('imagedrop'));
    document.getElementById('fileUpload').addEventListener("change", function(){ ajoutImage(this.files[0]); });
}

document.addEventListener("DOMContentLoaded", ready);