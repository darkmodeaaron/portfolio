const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobilenav')
const cancel = document.querySelector('.cancel')

hamburger.addEventListener('click', () => {
    mobileNav.style.height = 100 + '%'
    console.log('hi')
})

cancel.addEventListener('click', () => {
    mobileNav.style.height = 0
    console.log('bi')
})

window.addEventListener('resize', () => {
    mobileNav.style.height = 0
})




let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});