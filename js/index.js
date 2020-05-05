// Your code goes here
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`


// const paragraph = document.getElementsByTagName('p');
// console.log(paragraph);


// const changeColor = (event) =>{
//     paragraph.style.fontColor = 'blue';
// }

// for (var i = 0; i < paragraph.length; i++) {
//     paragraph[i].addEventListener('mouseover', changeColor);
// }
// function redirect(ev){
//     alert(ev.target.id);
// }


let links = document.querySelector('nav a')

function noLink(event){
    event.preventDefault();
}

links.onclick = noLink;

let headP = document.querySelector('.intro p');
console.log(headP);

function big(event){
    return headP.style.fontSize = '2rem';
}
headP.addEventListener('select', big)

let imageCont = document.querySelector('.content-section');
function orange(){
    return imageCont.style.background = 'orange';
}
imageCont.addEventListener('mouseover', orange)

const firstImage = document.querySelector('.intro img');
console.log(firstImage);

function onEscape(event){
    if(event.key === 'Escape'){
        firstImage.src='../img/fun.jpg'
    }
}
document.addEventListener('keydown', onEscape)

const introHead = document.querySelector('.intro h2');
console.log(introHead);

function red(){
    return introHead.style.color = 'red'
}

introHead.addEventListener('dblclick', red)

// const lastPhoto = document.querySelector('.content-destination img')



function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    firstPick.style.transform = `scale(${scale})`;
  }

let scale = 1;
let firstPick = document.querySelector('.destination');

  firstPick.onwheel = zoom;