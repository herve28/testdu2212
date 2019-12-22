var toto = 5;
console.log(toto);

var panier = [];
var tableau = [];

function mafonction() {
    var liste = [];
    var txt = "je comandZ"
    for (var i = 0; i < 10; i++) {

        document.getElementById("demo2").innerHTML = txt[i];
    }
}

document.getElementById("demo").innerHTML = "je commanderait";

function myfonction() {
    var lulu = document.getElementById("entre").value;
    console.log(lulu);

    panier.push(lulu);

    document.getElementById("demo6").innerHTML = lulu;

    document.getElementsByClassName("liste").innerHTML = lulu;


    console.log(panier)

    var simon = panier.length;
    document.getElementById("count").innerHTML = simon;


}


function laFunction() {
    var titi = document.getElementById("ecrire").value;
    
    var creation = document.createElement("LI");
    var textnode = document.createTextNode(titi);
    creation.appendChild(textnode);
    document.getElementById("myList").appendChild(creation);

tableau.push(titi);
var simon1 = tableau.length;
    document.getElementById("count1").innerHTML = simon1;

}


let results = "#";
let counter =0;
while(counter <7) {
    results+= "#";
    counter = counter +1;
    console.log(results)
}
