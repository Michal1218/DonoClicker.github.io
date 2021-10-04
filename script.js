let donos = 0;
let upgrade = 1;
let trihard = document.getElementById("trihard");
trihard.onclick = function getDonos() {
    donos = donos + (upgrade/100);
    trimDonos();
}

function trimDonos() {
    var donoTrim = Math.round(donos * 100) / 100;
    document.getElementById("donos").innerHTML = donoTrim;
}

let thing1 = 1;
let thing2 = 10;
let thing3 = 100;
let thing4 = 1000;

function buy1() {
    if (donos>=thing1) {
        donos = donos - thing1;
        upgrade = upgrade + 1;
        thing1 = thing1 + 1;
        document.getElementById("price1").innerHTML = thing1;
        upgrades();
        trimDonos();
    }
}

function buy2() {
    if (donos>=thing2) {
        donos = donos - thing2;
        upgrade = upgrade + 10;
        thing2 = thing2 + 10;
        document.getElementById("price2").innerHTML = thing2;
        upgrades();
        trimDonos();
    }
}

function buy3() {
    if (donos>=thing3) {
        donos = donos - thing3;
        upgrade = upgrade + 100;
        thing3 = thing3 + 100;
        document.getElementById("price3").innerHTML = thing3;
        upgrades();
        trimDonos();
    }
}

function buy4() {
    if (donos>=thing4) {
        donos = donos - thing4;
        upgrade = upgrade * 2;
        thing4 = thing4 + 1000;
        document.getElementById("price4").innerHTML = thing4;
        upgrades();
        trimDonos();
    }
}

function upgrades() {
    document.getElementById("upgrade").innerHTML = upgrade + " (donos per TriHard: " + (upgrade/100) + ")";
}