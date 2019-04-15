// Your code goes here


//Mouseover actions
let navbar = document.querySelector(".main-navigation");
let lHeading = document.querySelector(".logo-heading");
let nav = document.getElementsByTagName("a")[0];
let navi = document.getElementsByTagName("a")[1];
let navii = document.getElementsByTagName("a")[2];
let naviii = document.getElementsByTagName("a")[3];

//Highlight blue & White
navbar.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = "blue";

    lHeading.style.color = "white";

    nav.style.color = "white";
    navi.style.color = "white";
    navii.style.color = "white";
    naviii.style.color = "white";
    event.stopPropagation();
})

//KeyDown

//wheel

//drag/drop

//load

//focus

//resize

//scroll

//select

//dblclick
let dClick = document.querySelector("intro img");
dClick.addEventListener('dblclick', function(event){
    event.target.style.color = "white";
})
