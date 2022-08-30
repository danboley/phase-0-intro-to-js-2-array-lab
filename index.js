const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    return cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    let newCats = [...cats, "Broom"];
    return(newCats);
}

function prependCat() {
    let newCats = ["Arnold", ...cats];
    return(newCats);
}

function removeLastCat() {
    let newCats = [...cats];
    return(newCats.slice(0,-1));
}

function removeFirstCat() {
    let newCats = [...cats];
    return(newCats.slice(1));
}