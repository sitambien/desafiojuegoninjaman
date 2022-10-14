/*
let world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 2, 2, 1, 2, 1, 2, 2, 1],
    [1, 2, 1, 2, 1, 2, 2, 2, 1, 1],
    [1, 2, 1, 2, 1, 1, 1, 2, 2, 1],
    [1, 2, 1, 2, 2, 1, 2, 3, 1, 1],
    [1, 2, 1, 1, 2, 1, 1, 2, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 3, 1, 1],
    [1, 2, 2, 2, 1, 2, 1, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
*/
let worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi',
    3: 'onigiri'
}

//Crear Mundo
/*
const filas = Math.floor((Math.random() * 15) + 5);
const columnas = Math.floor((Math.random() * 18) + 5);
*/

const filas = 13;
const columnas = 13;

const cajay = Math.round(filas/2)+2;
const cajax = Math.round(columnas/2)+2;

let world = Array.from(Array(filas), () => new Array(columnas));

//console.log(world);

let cuenta = 0;

let vidas = 3;



for(let y = 0; y < filas; y++) {
    for(let x = 0; x < columnas; x++) {
        world[y][x] = Math.floor((Math.random() * 4) + 0);
        if ((y == 1 && x == 1)||(y == 1 && x == 2)||(y == cajay && x == cajax)) {
        } else if ((world[y][x]==2)||(world[y][x]==3)) {
            cuenta++;
        }
    }
}

world[1][1] = 0;
world[1][2] = 0;
world[6][6] = 0;

// console.log("Cuenta ", cuenta);

// Dibujar Mundo
function drawWorld() {

    output = "";
    let valorx;
    let valory;

    for(let y = 0; y < world[0].length; y++) {
        valory = y;
        output += "<div class='column'>"
        for(var x = 0; x < world.length; x++) {
            valorx = x;
            //console.log("columna ",valorx," y fila ", valory);
            //console.log(worldDict[world[valory][valorx]]);
            output += "<div class='"+worldDict[world[valorx][valory]]+"'></div>"
            //console.log("valor: ", worldDict[world[column][x]]);
        }
        output += "</div>"
    }
    document.getElementById('world').innerHTML = output;
}

drawWorld();

let ninjaman = {
    x: 1,
    y: 1
}

let fantasma = {
    x: 6,
    y: 6
}

let maloso = {
    x: 6,
    y: 6
}

let cuentaSushi = 0;
let cuentaOnigiri = 0;

function drawNinjaman () {
    document.getElementById('ninjaman').style.left = (ninjaman.x*50) + "px";
    document.getElementById('ninjaman').style.top = (ninjaman.y*50) + "px";
}
function drawFantasma () {
    document.getElementById('fantasma').style.left = (fantasma.x*50) + "px";
    document.getElementById('fantasma').style.top = (fantasma.y*50) + "px";
}
function drawMaloso () {
    document.getElementById('maloso').style.left = (maloso.x*50) + "px";
    document.getElementById('maloso').style.top = (maloso.y*50) + "px";
}

document.onkeydown = function(e){

    // Izquierda
    if (e.keyCode == 37){
        if (ninjaman.x <= (0)) {
            console.log("al limite");
        } else if ((world[ninjaman.y][ninjaman.x-1] != 1)) {
            ninjaman.x--;
        }
    }
    // Derecha
    if (e.keyCode == 39){
        if (ninjaman.x >= (columnas-1)) {
            console.log("al limite");
        } else if ((world[ninjaman.y][ninjaman.x+1] != 1)&&(ninjaman.x < columnas-1)) {
            ninjaman.x++;
        }
    }
    // Arriba
    if (e.keyCode == 38){
        if (ninjaman.y <= (0)) {
            console.log("al limite");
        } else if ((world[ninjaman.y-1][ninjaman.x] != 1)) {
            ninjaman.y--;
        }
    }
    // Abajo
    if (e.keyCode == 40){
        if (ninjaman.y >= (filas-1)) {
            console.log("al limite");
        } else if ((world[ninjaman.y+1][ninjaman.x] != 1)) {
            ninjaman.y++;
        }
    }

    if (world[ninjaman.y][ninjaman.x] == 2) {
        cuentaSushi++;
        //console.log(cuentaSushi);
    }
    if (world[ninjaman.y][ninjaman.x] == 3) {
        cuentaOnigiri++;
        //console.log(cuentaOnigiri);
    }

    world[ninjaman.y][ninjaman.x] = 0;

    drawNinjaman();
    drawWorld();
    
    if ((cuentaOnigiri+cuentaSushi) >= cuenta) {
        if (confirm('¡Ganaste! ¿quieres continuar jugando?')) {
            location.reload();
        } else {
            window.close();
        }
    }
}