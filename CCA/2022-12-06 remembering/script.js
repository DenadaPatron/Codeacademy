console.log('veikia');

function atsakymas(num){
    if (num <= 0) {
        return "ne grupe";
    }
    else if (num == 1) {
        return "solo";
    }
    else if (num == 2) {
        return "duetas";
    }
    else if (num == 3) {
        return "trio;"
    }
    else if (num == 4) {
        return "kvartetas";
    }
    else {
        return "didele grupe";
    }
}

console.log(atsakymas(3));