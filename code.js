/*This is code js link with index.html  */

var menu=document.getElementById("menu");
var all=document.getElementById("divall");


function play_menu(){
    if(menu.style.display=="block"){
        menu.style.display="none"
        all.style.filter="none"
        
    }
    else{
        menu.style.display="block"
        all.style.filter="blur(5px)"
    }
}
function play_food(){
    if(menu.style.display=="block"){
        menu.style.display="none"
        all.style.filter="none"
        
    }
    else{
        menu.style.display="block"
        all.style.filter="blur(5px)"
    }
}
function play_about(){
    if(menu.style.display=="block"){
        menu.style.display="none"
        all.style.filter="none"
        
    }
    else{
        menu.style.display="block"
        all.style.filter="blur(5px)"
    }
}

