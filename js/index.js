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