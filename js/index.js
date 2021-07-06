// Your code goes here
console.log(document.all)

// Selectors
const footerSection = document.querySelector('.footer')
console.log(footerSection)
const letsGoPicture = document.querySelector('.content-section .img-content img')
console.log(letsGoPicture)
const footerP = footerSection.querySelector('p')
console.log(footerP)
const contentSection1 = document.querySelector('.content-section')
console.log(contentSection1)
const heading = document.querySelector('h1.logo-heading')
console.log(heading)
const boatImg = document.querySelector('.content-destination img')
console.log(boatImg)
const letsGoHeader = document.querySelector('.content-section .text-content h2')
console.log(letsGoHeader)
const adventureImg = contentSection1.nextElementSibling.querySelector('.content-section .img-content img')
console.log('adventure image', adventureImg)


// Events
footerSection.addEventListener('mouseover', colorChangeOnOver)
footerSection.addEventListener('mouseout', colorChangeOnExit)

function colorChangeOnOver(event){   
    console.log('mouseover operable') 
    console.log('color changer')
    footerSection.style.backgroundColor = 'green'
}
function colorChangeOnExit(event){
    footerSection.style.backgroundColor = 'yellow'
}

letsGoPicture.addEventListener('click', radiusChange)

function radiusChange(event){
    event.stopPropagation()
    if(letsGoPicture.style.borderRadius === '10px'){
        letsGoPicture.style.borderRadius = '100px'
        return
    } else {
        letsGoPicture.style.borderRadius = '10px'
    }    
}

footerP.addEventListener('mousemove', fontShrink)

function fontShrink(event){
    footerP.style.fontSize = '1rem'
}

contentSection1.addEventListener('click', marginDecrease)

function marginDecrease(event){
    contentSection1.style.margin = '10px 0'
}

function funner(event){
    if(event.keyCode === 70){ // f key
      console.log('key pressed')
      heading.textContent = 'Funner Bus'
    }    
}
function blackToBlue(event){
    if(event.keyCode === 70){ // f key
        console.log('key lifted')
        heading.style.color = 'blue'
      }    
}

document.addEventListener('keydown', funner)
document.addEventListener('keyup', blackToBlue)

window.addEventListener('load', radiusBoat)

function radiusBoat(event){
    console.log('load function working')
    boatImg.style.borderRadius = '100px'
}

window.addEventListener('scroll', yellowFlicker)

function yellowFlicker(event){
    console.log('scroll function working')
    if(letsGoHeader.style.color === 'black'){
        letsGoHeader.style.color = 'yellow'
    }else{
        letsGoHeader.style.color = 'black'
    }
}

adventureImg.addEventListener('dblclick', widthChange)

function widthChange(event){
    adventureImg.style.width = '50%'
}

window.addEventListener('resize', resizeLetsGo)

function resizeLetsGo(event){
    letsGoPicture.style.width = '50%'
}