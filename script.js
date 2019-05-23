let gNumRow = 0;
let gNumCol = 0;

let LignesElec = [
    [
        {
            "picto": "blank.png",
            "texte": "A",
            "span": 3
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 0
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 0
        },
        {
            "picto": "tumble-dryer.png",
            "texte": "Sèche-linge",
            "span": 1
        },
        {
            "picto": "washing-machine.png",
            "texte": "Lave-linge",
            "span": 1
        },
        {
            "picto": "light.png",
            "texte": "Cuisine - Salon\n",
            "span": 1
        },
        {
            "picto": "wall-socket.png",
            "texte": "Grenier",
            "span": 1
        },
        {
            "picto": "wall-socket.png",
            "texte": "Extérieur est\n",
            "span": 1
        },
        {
            "picto": "wall-socket.png",
            "texte": "Meuble blanc\n",
            "span": 1
        },
        {
            "picto": "wall-socket.png",
            "texte": "Entrée",
            "span": 1
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 4
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 0
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 0
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 0
        },
        {
            "picto": "light.png",
            "texte": "Entrée + prise tableau\n",
            "span": 1
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 2
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 0
        },
        {
            "picto": "light.png",
            "texte": "Télérupteur entrée",
            "span": 1
        }
    ],
    [
        {
            "picto": "blank.png",
            "texte": "AC",
            "span": 3
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 0
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 0
        },
        {
            "picto": "wall-socket.png",
            "texte": "Cheminée",
            "span": 1
        },
        {
            "picto": "wall-socket.png",
            "texte": "Cuisine",
            "span": 1
        },
        {
            "picto": "light.png",
            "texte": "Salle de bains - WC\n",
            "span": 1
        },
        {
            "picto": "wall-socket.png",
            "texte": "Intérieur est\n",
            "span": 1
        },
        {
            "picto": "wall-socket.png",
            "texte": "Salle de bains rez-de-chaussée",
            "span": 1
        },
        {
            "picto": "wall-socket.png",
            "texte": "Salle de bains étage + chambre\n",
            "span": 1
        },
        {
            "picto": "light.png",
            "texte": "Salle de bains étage + chambre\n",
            "span": 1
        },
        {
            "picto": "lights.png",
            "texte": "Interrupteurs ouest\n",
            "span": 1
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 2
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 0
        },
        {
            "picto": "wall-socket.png",
            "texte": "Surpresseur",
            "span": 1
        },
        {
            "picto": "water-heater.png",
            "texte": "Cumulus",
            "span": 1
        },
        {
            "picto": "water-heater.png",
            "texte": "SONOFF cumulus",
            "span": 3
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 0
        },
        {
            "picto": "blank.png",
            "texte": "",
            "span": 0
        }
    ]
];
let autoCompress;

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
        LignesElec[gNumRow][gNumCol + 1].span = 1;
    }
    else if(LignesElec[gNumRow][gNumCol].span == 0) {
        LignesElec[gNumRow][gNumCol].span = 1;
    }
    updateAfterSplitMerge();
}

function updateAfterSplitMerge() {
    // Reprendre la ligne a l'envers, compter les cellules fusionnées et mettre a jour les valeurs
    let nombreCellulesFusionnees = 0;
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
    const coords = e.target.closest("td").id.split('_');
    Select(parseInt(coords[0], 10), parseInt(coords[1], 10));
}

function sauveTexte(e) {
    const target = e.target;
    const coords = target.closest("td").id.split('_');
    LignesElec[coords[0]][coords[1]].texte = target.innerText;
    
    metAJourLZData();
}

function metAJourLZData() {
    if(autoCompress) {
        const textAreaLZData = document.getElementById("lzdata");
        try {
            textAreaLZData.value = encodeURIComponent(LZUTF8.compress(JSON.stringify(LignesElec), {outputEncoding: "Base64"}));
            textAreaLZData.style.backgroundColor = "";
        }
        catch (e) {
            console.exception(e);
            textAreaLZData.value = "Erreur : impossible de compresser les données";
            textAreaLZData.style.backgroundColor = "red";
        }
    }
}

function updateTable() {
    const el = document.getElementById('myTable');
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
    const table = document.createElement("table");
    table.classList.add("ligneTableau");
    const tbody = document.createElement("tbody");
    for(numRow = 0 ; numRow < LignesElec.length ; ++numRow) {
        let ligne = document.createElement("tr");
        for(numCol = 0 ; numCol < LignesElec[numRow].length ; ++numCol){
            if(LignesElec[numRow][numCol].span != 0){
                const cellule = document.createElement("td");
                cellule.classList.add("Cell", "CellTableau");
                cellule.id = `${numRow}_${numCol}`;
                cellule.addEventListener("click", SelectCellule);
                cellule.colSpan = LignesElec[numRow][numCol].span;
                if (LignesElec[numRow][numCol].picto != "blank.png") {
                    const picto = document.createElement("img");
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
        const ligneEspace = document.createElement("tr");
        ligneEspace.classList.add("TRSpacer");
        for(numCol = 0 ; numCol < LignesElec[numRow].length ; ++numCol) {
            const td = document.createElement("td");
            td.classList.add("Cell", "CellEspace");
            td.id = `${numRow}_${numCol}_td`;
            td.addEventListener("click", SelectCellule);
            const indicateur = document.createElement("div");
            indicateur.setAttribute("data-html2canvas-ignore", true);
            indicateur.id = `indic_${numRow}_${numCol}`;
            td.appendChild(indicateur);
            ligneEspace.appendChild(td);
        }
        tbody.appendChild(ligneEspace);
    }
    
    table.appendChild(tbody);
    document.getElementById('myTable').appendChild(table);
    metAJourLZData();
}

function RAZ(){
    if(confirm('Effacer tout le tableau ?')){
        for(let numRow = 0 ; numRow < LignesElec.length ; ++numRow){
            for(let numCol = 0 ; numCol < LignesElec[numRow].length ; ++numCol) {
                LignesElec[numRow][numCol].picto = 'blank.png';
                LignesElec[numRow][numCol].texte = '';
                LignesElec[numRow][numCol].span = 1;
            }
        }
        updateTable();
    }
}

function NextIdem(){
    const img = LignesElec[gNumRow][gNumCol].picto;
    const texte = LignesElec[gNumRow][gNumCol].texte;
    if(gNumCol < LignesElec[0].length) {
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
    const imgList = [
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
    
    const listePicto = document.getElementById("listePicto");
    imgList.forEach(imageName => {
        const image = document.createElement("img");
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
        const reader = new FileReader();
        reader.readAsDataURL( fichier );
        reader.onload = function(newImage) {
            const listePicto = document.getElementById("listePicto");
            const image = document.createElement("img");
            image.src = newImage.target.result;
            image.onclick = function() {AddPicture(newImage.target.result);};
            listePicto.insertBefore(image, listePicto.lastElementChild);
        };
    }
}

const dragdrop = {
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
    const nouvelleValeur = e.target.value;
    while (nouvelleValeur < LignesElec[0].length) {
        for (let i = 0; i < LignesElec.length; ++i) {
            LignesElec[i].pop();
        }
    }
    while (nouvelleValeur > LignesElec[0].length) {
        for (let i = 0; i < LignesElec.length; ++i) {
            LignesElec[i].push({picto: 'blank.png',texte: '',span: 1});
        }
    }
    updateTable();
}
function changeNombreLignes(e) {
    const nouvelleValeur = e.target.value;
    while (nouvelleValeur < LignesElec.length) {
        LignesElec.pop();
    }
    while (nouvelleValeur > LignesElec.length) {
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
        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        const pdf = new jsPDF('l', 'mm', document.getElementById("slctFormat").value);
        const margins = {
            top: 7,
            left: 7
        };
        pdf.addImage(imgData, 'JPEG', margins.top, margins.left);
        pdf.save("download.pdf");
    });
}

function chargeLZdata() {
    const textArea = document.getElementById("lzdata");
    try {
        LignesElec = JSON.parse(LZUTF8.decompress(decodeURIComponent(textArea.value), {inputEncoding: "Base64"}));
        updateTable();
    }
    catch (e) {
        console.exception(e);
        textArea.value = "Erreur : impossible de lire les données";
        textArea.style.backgroundColor = "red";
    }
}

function loadGETData() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('data')) {
        document.getElementById("lzdata").value = urlParams.get("data");
        chargeLZdata();
    }
}

function sendToURL() {
    const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?data=${document.getElementById("lzdata").value}`;
    window.location = newurl;
}

function ready() {
    const checkboxAutoCompress = document.getElementById("checkboxAutoCompress");
    checkboxAutoCompress.addEventListener("change", () => {
        autoCompress = checkboxAutoCompress.checked;
        if (autoCompress) {
            metAJourLZData();
        }
        else {
            document.getElementById("lzdata").value = "";
        }
    });
    autoCompress = checkboxAutoCompress.checked;
    updateTable();
    loadPicto();
    document.getElementById("btnMerge").addEventListener("click", merge);
    document.getElementById("btnSplit").addEventListener("click", split);
    document.getElementById("btnSuivantIdentique").addEventListener("click", NextIdem);
    document.getElementById("btnRAZ").addEventListener("click", RAZ);
    document.getElementById("btnExportPdf").addEventListener("click", exportPDF);
    document.getElementById("btnLoadLZData").addEventListener("click", chargeLZdata);
    document.getElementById("btnSendToURL").addEventListener("click", sendToURL);
    
    Select(gNumRow, gNumCol);
    
    let rangeLignes = document.getElementById("rangeLignes");
    rangeLignes.value = LignesElec.length;
    rangeLignes.addEventListener("change", changeNombreLignes);
    let rangeColonnes = document.getElementById("rangeColonnes");
    rangeColonnes.value = LignesElec[0].length;
    rangeColonnes.addEventListener("change", changeNombreColonnes);
    
    dragdrop.init(document.getElementById('imagedrop'));
    document.getElementById('fileUpload').addEventListener("change", function(){ ajoutImage(this.files[0]); });
    loadGETData();
}

document.addEventListener("DOMContentLoaded", ready);