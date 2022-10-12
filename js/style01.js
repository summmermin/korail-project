// topbt
const btt=document.querySelector('#chat');
let scrollAmount;
console.log(window)
window.addEventListener('scroll',function(){
    scrollAmount=this.scrollY;
    if(scrollAmount>scrollAmount/4){
        btt.classList.add('visible');
    }
    else{
        btt.classList.remove('visible');
    }
})
btt.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(btt.getAttribute('href'))
    .scrollIntoView({behavior:'smooth'})
})