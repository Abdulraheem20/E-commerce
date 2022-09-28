let bigImage = document.querySelector('.image-big');
console.log(bigImage);
let smallImages = document.querySelectorAll('.small-images img');
console.log(smallImages);

for(let i = 0; i < smallImages.length; i++ ){
    smallImages[0].classList.add('opaRm')
    smallImages[i].addEventListener('click', (e)=>{
        bigImage.setAttribute('src', smallImages[i].src)
        if(smallImages[i].click){
            smallImages[i].classList.add('opaRm')
        }else{
            smallImages[i].classList.remove('opaRm')
        }
    })
}

// let add = document.querySelector('.plusMinus .plus button');
// let minus = document.querySelector('.plusMinus .minus button');
// let display = document.querySelector('..plusMinus span');
// let quantity = 0;