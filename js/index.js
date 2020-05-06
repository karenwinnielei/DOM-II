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

function changeText(){
    event.target.textContent = 'too much fun';
}

const paragraph = Array.from(document.querySelectorAll('p'));
paragraph.forEach(element => {
        element.addEventListener('mousemove', changeText)
    }
)


let links = Array.from(document.querySelectorAll('nav a'))

function noLink(event){
    event.preventDefault();
}
links.forEach(element => {
    element.onclick = noLink;
})

function orange(){
    event.target.style.background = 'orange';
}

function white(){
    event.target.style.background = 'white';
}


const allContent = document.querySelectorAll('.content-section');
allContent.forEach(element => {
    element.addEventListener('mouseover', orange)
    element.addEventListener('mouseout', white)
})

const allImages = Array.from(document.querySelectorAll('img'));
for(let i = 0; i < allImages.length; i++){
    function onEscape(event){
        if(event.key === 'Escape'){
            allImages[i].src='../img/fun.jpg'
        }
    }
    function offEscape(event){
        if(event.key === 'Escape'){
            allImages[i].src='../img/fun-bus.jpg'
        }
    }
    document.addEventListener('keydown', onEscape)
    document.addEventListener('keyup', offEscape)
}

const headings = Array.from(document.querySelectorAll('h2'));
for(let i = 0; i < headings.length; i++){
    function red(element){
        headings[i].style.color = 'red'
    }
    headings[i].ondblclick = red
}


function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    event.target.style.transform = `scale(${scale})`;
  }

  let scale = 1;

  let destArr = Array.from(document.querySelectorAll('.destination'));
  destArr.forEach(element =>{
      element.addEventListener('wheel', zoom)
  })

  function button(){
      event.target.textContent = 'why did you click me'
  }
  let btn = Array.from(document.querySelectorAll('.btn'))
  btn.forEach(element =>{
      element.addEventListener ('click', button)
  })

  function funLogo(){
      event.target.style.color = 'white'
  }
  let logo = document.querySelector('.logo-heading');
  
  logo.addEventListener('mouseenter', funLogo)