const burgerWrapper = document.querySelector(".header__nav");
const body = document.querySelector("body"); 
const burgerButton = document.querySelector(".header__burger");
function pushBurgerButton() {
    if(burgerWrapper.classList.contains("active")){
        burgerWrapper.classList.remove("active");
        body.classList.remove("lock");
        burgerButton.classList.remove("active");
    } else {
        burgerWrapper.classList.toggle("active");
        body.classList.toggle("lock");
        burgerButton.classList.toggle("active");
    }
}  
burgerButton.addEventListener("click", pushBurgerButton);
// Звертання бургеру при натисканні не на лінк
const navLink = document.querySelectorAll('.nav__list-link');
function removeBurgerClasses() {
    if(burgerWrapper.classList.contains("active")) {
        burgerWrapper.classList.remove("active");
        body.classList.remove("lock");
        burgerButton.classList.remove("active");
    }
}
navLink.forEach(function(item) {
  item.addEventListener('click', removeBurgerClasses);
});
// logo прибирає класи
const navLogo = document.querySelector('.header__logo');
navLogo.addEventListener('click', removeBurgerClasses);
