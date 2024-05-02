const firstButton = document.querySelector('.rodyti');
const secondButton = document.querySelector('.maisyti');
const ulElement = document.querySelector('ul')
firstButton.style.display='block';
secondButton.style.display='none';

firstButton.addEventListener('click', showPhotos);
function showPhotos(){
    for(let i = 1; i <= 10; i++) {
        const liElement = document.createElement('li');
        const imgElement = document.createElement('img');
        imgElement.src =`./foto/nuotrauka${i}.jpg`;
        liElement.appendChild(imgElement);
        ulElement.appendChild(liElement);
    }
    firstButton.style.display='none';
    secondButton.style.display='block';

    const imgElements = document.querySelectorAll('img');
    imgElements.forEach((img) =>{
        img.addEventListener('dblclick', ()=>{
            img.src = './foto/default11.jpg'
        })
    })

}
secondButton.addEventListener('click', shufflePhotos);
function shufflePhotos(){
    const photos = Array.from(ulElement.querySelectorAll('li'));
    photos.sort(()=> Math.random() - 0.5);
    photos.forEach((photo) =>{
        ulElement.appendChild(photo);
    })
}

 