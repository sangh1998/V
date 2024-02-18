const text = document.querySelector('.text');
const readMoreBtn = document.querySelector('.btn-for-more');

readMoreBtn.addEventListener('click',(event)=>{
 text.classList.toggle('more-text-sho');
 if(readMoreBtn.innerText === 'Read More'){
    readMoreBtn.innerText = 'Read Less';
 }else{
    readMoreBtn.innerText = 'Read More';
 }
});