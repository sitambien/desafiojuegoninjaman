const timerId = setInterval(alertMe, 1000);

let difx = null;
let dify = null;

function alertMe() {
    //alert('kkd jjdj jdjjdjd djjd')
    let arriba = 0;
    let abajo = 0;
    let izquierda = 0;
    let derecha = 0;

    //console.log('coordenada y: ',coordenadad[0],' y coordenada x: ',coordenadad[1] )

    // arriba
    if (fantasma.y > 0 ) {
        if ( (world[fantasma.y-1][fantasma.x] != 1) ) {
            arriba = 1;
            //console.log("puede moverse hacia arriba");
        }
    }
    // abajo
    if (fantasma.y < 12 ) {
        if ( (world[fantasma.y+1][fantasma.x] != 1) ) {
            abajo = 1;
            //console.log("puede moverse hacia abajo");
        }
    }
    // izquierda
    if (fantasma.x > 0 ) {
        if ( (world[fantasma.y][fantasma.x-1] != 1) ) {
            izquierda = 1;
            //console.log("puede moverse hacia la izquierda");
        }
    }
    // derecha
    if (fantasma.x < 12) {
        if ( (world[fantasma.y][fantasma.x+1] != 1) ) {
            derecha = 1;
            //console.log("puede moverse hacia la derecha");
        }
    }

    // movimiento
    if ( Math.abs(ninjaman.x-fantasma.x) <= Math.abs(ninjaman.y-fantasma.y) ) {
        //console.log("caso 1");
        if ( (ninjaman.y < fantasma.y)&&(arriba != 0) ) {
            fantasma.y--;
        } else if ( (ninjaman.y > fantasma.y)&&(abajo != 0) ) {
            fantasma.y++;
        } else {
            if (arriba == 0 || abajo == 0) {
                if ( (ninjaman.x <= fantasma.x)&&(izquierda != 0) ) {
                    fantasma.x--;
                } else if ( (ninjaman.x > fantasma.x)&&(derecha != 0) ) {
                    fantasma.x++;
                }
            }
        }
    } else if ( Math.abs(ninjaman.x-fantasma.x) > Math.abs(ninjaman.y-fantasma.y) ){
        //console.log("caso 2");
        if ( (ninjaman.x <= fantasma.x)&&(izquierda != 0) ) {
            fantasma.x--;
        } else if ( (ninjaman.x > fantasma.x)&&(derecha != 0) ) {
            fantasma.x++;
        } else {
            if (izquierda == 0 || derecha == 0) {
                if ( (ninjaman.y <= fantasma.y)&&(arriba != 0) ) {
                    fantasma.y--;
                } else if ( (ninjaman.y > fantasma.y)&&(abajo != 0) ) {
                    fantasma.y++;
                }
            }
        }
    }

    difx = ninjaman.x-fantasma.x;
    dify = ninjaman.y-fantasma.y;

    if ( difx == 0 && dify == 0) {
        //clearInterval(timerId);
        vidas--;
        if (vidas == 2) {
            if (confirm('Te quedan 2 vidas, ¿quieres continuar jugando?')) {
                ninjaman.x = 1;
                ninjaman.y = 1;
                fantasma.x = 6;
                fantasma.y = 6;
                maloso.x = 6;
                maloso.y = 6;
                drawMaloso();
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
                drawMaloso();
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

    drawFantasma();

}