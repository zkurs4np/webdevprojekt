let kontostand = 10;
let slider = document.getElementById("slider");

function zaehlen() {
    let anzeige = document.getElementsByClassName("anzeige")[0].children[0];
    let vorherzahl = parseInt(anzeige.innerHTML);
    let aktzahl = Math.floor(Math.random()*10)+1;
    if(aktzahl == vorherzahl) {
        aktzahl = Math.floor(Math.random()*10)+1;
    }
    let differenz = aktzahl - vorherzahl;
    if(differenz > 0) {
        console.log("Vorherzahl: "+vorherzahl+", Differenz: "+differenz, ", AktZahl: "+aktzahl);
        hochzaehlen(anzeige, vorherzahl, differenz, () =>
        {
            anzeige.innerHTML = aktzahl;
        }
        );
    }
    if(differenz < 0) {
        console.log("Vorherzahl: "+vorherzahl+", Differenz: "+differenz, ", AktZahl: "+aktzahl);
        runterzaehlen(anzeige, vorherzahl, differenz, () => 
        {
            anzeige.innerHTML = aktzahl;
        }
        );
    }
}

function hochzaehlen(anzeige, vorherzahl, differenz, callback) {
    let count = 0;
    function inkrementieren() {
        anzeige.innerHTML = vorherzahl + count;
        count++;
        if(count <= differenz) {
            setTimeout(inkrementieren, 35);
        } else {
            callback();
        }
    }
    inkrementieren();
}

function runterzaehlen(anzeige, vorherzahl, differenz, callback) {
    differenz *= -1;
    let count = 0;
    function dekrementieren() {
        anzeige.innerHTML = vorherzahl - count;
        count++;
        if(count <= differenz) {
            setTimeout(dekrementieren, 35);
        } else {
            callback();
        }
    }
    dekrementieren();
}

function setzen(element) {
    element.classList.toggle("ausgewaehlt");
}