const mobileMenuBtn = document.querySelector('.mobile-menu');
console.log(mobileMenuBtn);
const mobileMenu  = document.querySelector('.mobile-menu__wrap');
console.log(mobileMenu);

mobileMenuBtn.onclick = function () {
   
    mobileMenu.classList.toggle('active')
}

const searchBtn = document.querySelector('.header__search-icon')
const headerSearch = document.querySelector('.header__search');
searchBtn.onclick = function () {
    headerSearch.classList.toggle('active');
}

const mobileSearchBtn = document.querySelector('.mobile-search__icon');
const mobileSearch = document.querySelector('.mobile-search');

mobileSearchBtn.onclick = function () {
    mobileSearch.classList.toggle('active');
}

