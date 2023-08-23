window.onload=()=>{
    setTimeout(()=>{
        document.querySelector('body').classList.add('display')
    },4000)
}
const hamberger = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');
hamberger.addEventListener('click',()=>{
    container.classList.toggle('change');
});


const scroll_btn = document.querySelector('.scroll-btn');

scroll_btn.addEventListener('click',()=>{
    document.querySelector('html').style.scrollBehavior="smooth";

    setTimeout(()=>{
    document.querySelector('html').style.scrollBehavior="unset";

    },1000)
})