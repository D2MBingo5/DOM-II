// Your code goes here
console.log(document.all)
// Selectors
const footerSection = document.querySelector('.footer')
console.log(footerSection);
const letsGoPicture = document.querySelector('.content-section .img-content img')
console.log(letsGoPicture)


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

// function radiusChange(event){
//     letsGoPicture.style.borderRadius = '100px'
// }

function radiusChange(event){
    if(letsGoPicture.style.borderRadius === '10px'){
        letsGoPicture.style.borderRadius = '100px'
        return
    } else {
        letsGoPicture.style.borderRadius = '10px'
    }    
}