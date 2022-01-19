burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click' , ()=>{
    rightNav.classList.toogle('v-class-resp');
    navList.classList.toogle('v-class-resp');
    navbar.classList.toogle('h-nav-resp');

})