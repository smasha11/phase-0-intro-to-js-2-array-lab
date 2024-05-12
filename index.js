// Write your solution here!

let cats = ["Milo", "Otis", "Garfield" ];
console.log(cats);

function destructivelyAppendCat(name) {
  cats.push('Ralph');
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat (name) {
    cats.pop();
}
function destructivelyRemoveFirstCat (name) {
    cats.shift();
}

function appendCat(name) {
  return [...cats, "Broom"];
}
function  prependCat(name) {
    return ["Arnold", ...cats];
}




function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1, cats.length);
}