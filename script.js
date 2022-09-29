let bigImage = document.querySelector('.image-big');
console.log(bigImage);
let smallImages = document.querySelectorAll('.small-images img');
console.log(smallImages);

for(let i = 0; i < smallImages.length; i++ ){
    smallImages[0].classList.add('opaRm')
    smallImages[i].addEventListener('click', (e)=>{
        e.preventDefault()
        bigImage.setAttribute('src', smallImages[i].src)
        bigImage.style.width = '400px'
        
        if(smallImages[i].src == bigImage.src){
            smallImages[i].classList.add('opaRm')
        } else if(smallImages[i].src == bigImage.src){
            smallImages[i].classList.add('opa')
           
        }
        // if(smallImages[i].classList == 'op')

     })
    //  smallImages[i].style.opacity = '1'
    
} 

let add = document.querySelector('.plus h1');
let minus = document.querySelector('.plusMinus .minus h1');
let display = document.querySelector('.plusMinus span');
let displayValue = 0;


add.addEventListener('click', (e)=>{
    display.textContent = displayValue+=1
});

;
minus.addEventListener('click', ()=>{
    let min = 0
    if (displayValue >  0){
        display.textContent = displayValue-=1
    } else if (displayValue ==  0){
        display.textContent = 0
    }
})
 const addToCart = document.querySelector('.addToCart');
 addToCart.addEventListener('click', ()=>{
    
 })