const header=document.querySelector('.header');
const button=document.querySelector('.button');
const header_2=document.querySelector('.header_2');
const button_2=document.querySelector('.button_2');

button.addEventListener('click',function () {
	header.classList.toggle('toggle');
})
button_2.addEventListener('click',function(){
	header_2.classList.toggle('toggle-2')
})