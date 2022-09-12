const dogBtn = document.querySelector('#btnDog');
const catBtn = document.querySelector('#btnCat');
const dogImage = document.querySelector('.dogArea');
const catImage = document.querySelector('.catArea');
dogBtn.addEventListener('click', getImageDog);
function getImageDog() {
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(data => {
        dogImage.innerHTML = `<img src="${data.message}"/>`;
    });
}

catBtn.addEventListener('click', getImageCat);
function getImageCat()
{
    fetch('https://aws.random.cat/meow').then(response => response.json()).then(data => {
        catImage.innerHTML = `<img src="${data.file}"/>`;
    })
}