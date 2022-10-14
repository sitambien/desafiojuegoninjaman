const cuentaTimer = setInterval(timer, 1000);

let countdown = 0;

function timer() {
    countdown ++;
    console.log(countdown);
    if (countdown >= 10) {
        clearInterval(cuentaTimer);
        const maloso = setInterval(alertMe2, 800);
    }
}

let difmx = null;
let difmy = null;

function alertMe2() {
    //alert('kkd jjdj jdjjdjd djjd')
    let arribam = 0;
    let abajom = 0;
    let izquierdam = 0;
    let derecha2 = 0;

    //console.log('coordenada y: ',coordenadad[0],' y coordenada x: ',coordenadad[1] )

    // arribam
    if (maloso.y > 0 ) {
        if ( (world[maloso.y-1][maloso.x] != 1) ) {
            arribam = 1;
            //console.log("puede moverse hacia arribam");
        }
    }
    // abajom
    if (maloso.y < 12 ) {
        if ( (world[maloso.y+1][maloso.x] != 1) ) {
            abajom = 1;
            //console.log("puede moverse hacia abajom");
        }
    }
    // izquierdam
    if (maloso.x > 0 ) {
        if ( (world[maloso.y][maloso.x-1] != 1) ) {
            izquierdam = 1;
            //console.log("puede moverse hacia la izquierdam");
        }
    }
    // derecha2
    if (maloso.x < 12) {
        if ( (world[maloso.y][maloso.x+1] != 1) ) {
            derecha2 = 1;
            //console.log("puede moverse hacia la derecha2");
        }
    }

    // movimiento
    if ( Math.abs(ninjaman.x-maloso.x) <= Math.abs(ninjaman.y-maloso.y) ) {
        //console.log("caso 1");
        if ( (ninjaman.y < maloso.y)&&(arribam != 0) ) {
            maloso.y--;
        } else if ( (ninjaman.y > maloso.y)&&(abajom != 0) ) {
            maloso.y++;
        } else {
            if (arribam == 0 || abajom == 0) {
                if ( (ninjaman.x <= maloso.x)&&(izquierdam != 0) ) {
                    maloso.x--;
                } else if ( (ninjaman.x > maloso.x)&&(derecha2 != 0) ) {
                    maloso.x++;
                }
            }
        }
    } else if ( Math.abs(ninjaman.x-maloso.x) > Math.abs(ninjaman.y-maloso.y) ){
        //console.log("caso 2");
        if ( (ninjaman.x <= maloso.x)&&(izquierdam != 0) ) {
            maloso.x--;
        } else if ( (ninjaman.x > maloso.x)&&(derecha2 != 0) ) {
            maloso.x++;
        } else {
            if (izquierdam == 0 || derecha2 == 0) {
                if ( (ninjaman.y <= maloso.y)&&(arribam != 0) ) {
                    maloso.y--;
                } else if ( (ninjaman.y > maloso.y)&&(abajom != 0) ) {
                    maloso.y++;
                }
            }
        }
    }

    difmx = ninjaman.x-maloso.x;
    difmy = ninjaman.y-maloso.y;

    if ( difmx == 0 && difmy == 0) {
        vidas--;
        if (vidas == 2) {
            if (confirm('Te quedan 2 vidas, ¿quieres continuar jugando?')) {
                ninjaman.x = 1;
                ninjaman.y = 1;
                fantasma.x = 6;
                fantasma.y = 6;
                maloso.x = 6;
                maloso.y = 6;
                drawFantasma();
                drawNinjaman();
            } else {
                alert('perdistes');
                location.reload();
            }
        }
        if (vidas == 1) {
            if (confirm('Te queda 1 vidas, ¿quieres continuar jugando?')) {
                ninjaman.x = 1;
                ninjaman.y = 1;
                fantasma.x = 6;
                fantasma.y = 6;
                maloso.x = 6;
                maloso.y = 6;
                drawFantasma();
                drawNinjaman();
            } else {
                alert('perdistes');
                location.reload();
            }
        }
        if (vidas == 0) {
            alert('perdistes');
            location.reload();
        }
    }

    drawMaloso();

}