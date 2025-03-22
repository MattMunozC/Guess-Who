import { pkdex, types } from "./pokemon_info.js";
import {} from "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";

function div_build(element){
    var src=src_build(element["dex number"])
    var types=element["types"]
    var types_str=types.length>1?`type1="${types[0]}" type2="${types[1]}"`:`type1="${types[0]}" type2=""`;
    return `<div class="tile" id="${element["dex number"]}" ${types_str} name="${element["pokemon name"]}" onClick="obscure(this.id)"><img class="" src="${src}"><p>${element["pokemon name"]}</p></div>`  
}
function src_build(dex_num){
    dex_num = dex_num.lenght>3?dex_num.slice(1): dex_num;
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${dex_num}.png`
}
function filter(type,check){
    var tile,type1,type2,img;
    pkdex.forEach(element=>{
        tile=document.getElementById(element["dex number"]);
        type1=tile.attributes.getNamedItem("type1").value;
        type2=tile.attributes.getNamedItem("type2").value;
        if (type1==type || type2==type){
            img=tile.firstChild
            check?img.className="obscured":img.className="";
        }
    })
}

function cap(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const grid=document.getElementById("grid")
pkdex.forEach(element => {
    grid.innerHTML+=div_build(element)
});


const selector=document.getElementById("selector")
for(let element of types){
    selector.innerHTML+=`<input type="checkbox" name="${element}" id="${element}"><div>${cap(element)}</div>`
}

const selector_options=document.querySelectorAll("input")
for(let element of selector_options){
    element.addEventListener('change',()=>{
        filter(element.name,element.checked)
    })
}
const selection=pkdex[getRandomInt(150)]
document.getElementById("Pokemon").innerHTML=`<img src="${src_build(selection["dex number"])}">${selection["pokemon name"]}`
