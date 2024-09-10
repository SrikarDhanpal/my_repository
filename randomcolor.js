let click=document.querySelector("button");
click.addEventListener("mouseenter", function(){
    let h3=document.querySelector("h3");
    let randomcolor=generateColour();
    h3.innerText=randomcolor;
    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolor;
})
function generateColour(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);   
    let color= `rgb(${red}, ${green}, ${blue})`;
    return color;
}
