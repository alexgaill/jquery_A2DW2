// Correspond à un document.querySelector ou document.querySelectorAll
let title = $("h1");
let divs = $("div");

// title.style.color = "blue";
title.css("color", "red");

// La première ligne permet de modifier la width, la height et une propriété séparément
// La deuxième modifie plusieurs propriétés css en une seule method
divs.width("50px").height("50px").css("background-color", "yellow");
divs.css({
    "width":"100px", 
    "height":"100px", 
    "background-color":"green", 
    "margin": "10px"
});

divs.addClass("small");
$("#secondDiv").addClass("big");
$("#secondDiv").removeClass("small");

// title.addEventListener("click",function(){console.log("toto")})
title.click(function(){
    console.log("toto");
});

// for (const div of divs) {
//     div.addEventListener("click", function(){
//         console.log("j'ai cliqué sur une div");
//     })
// }
divs.click(function(){
    console.log("j'ai cliqué sur une div");
})

// .hide permet d'ajouter un display:none à un élément
function hide(){
    $(this).hide(2000, show)
}

// .show permet de retirer un display:none à un élément
function show(){
    // () => {} correspond à une fonction fléchée
    // () correspond aux paramètres de la fonction
    // {} correspond à la partie de la fonction qui possède le code
    setTimeout(() => {
        $(this).show(1000, hide)
    }, 1000);
}
// divs.hide(1000, show);

$("button").click(function(event){
    event.preventDefault();
    // console.log($("input").val());
    // console.log($(":password").val());

    // retourne une chaine de caractère contenant toutes les values des input
    console.log($("form").serialize());
    
    // retourne une tableau d'objet contenant toutes les values des input
    let form = $("form").serializeArray();

    for (const input of form) {
        console.log(input.value);
    }
})