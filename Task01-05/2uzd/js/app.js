/*
Sukurti atsiliepimų WEB aplikaciją. 
Vartotojas įveda formoje savo vardą, el. paštą, atsiliepimą ir paspaudžia saugoti. 
Atsiliepimas atvaizduojamas gride po forma. Svarbu semantika, estetika, ir responsive.
*/
const form = document.getElementById('reviewForm');
const reviewsList = document.getElementById('reviewsList');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const review = document.getElementById('review').value;

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review');
    reviewItem.innerHTML = `<p class="name"> Name: ${name}
     (${email})</p>
     <p>${review}</p>
     `;

    reviewsList.appendChild(reviewItem);

    form.reset();
  });

