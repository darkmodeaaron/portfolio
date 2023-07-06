const nav = document.querySelector('.nav-wrapper')
const hamburger = document.querySelector('.hamburger')
const backbtn = document.querySelector('.backbtn-wrapper')
const blurs = document.querySelector('.nav-blur')

hamburger.addEventListener('click', () => {
	nav.classList.toggle("active");
	blurs.classList.toggle("active")
})

backbtn.addEventListener('click', () => {
	nav.classList.remove("active")
	productsDropdownMobile.style.height = 0;
	blurs.classList.remove("active")
	productsDropdownMobile.classList.remove('active')
})

blurs.addEventListener('click', () => {
	nav.classList.remove("active")
	productsDropdownMobile.style.height = 0;
	blurs.classList.remove("active")
	productsDropdownMobile.classList.remove('active')
})


const productsbtnMobile = document.querySelector('.productback-text')
const productsDropdownMobile = document.querySelector('.products-dropdown-mobile')

const productsbtnDesktop = document.querySelector('.products-btn-desktop')
const productsDropdownDesktop = document.querySelector('.products-dropdown-desktop')

productsbtnMobile.addEventListener('click', function(event) {

	if (productsDropdownMobile.classList.toggle('active')) {
			const menuHeight = Array.from(productsDropdownMobile.children).map(item => item.clientHeight).reduce((a, b) => a + b, 0);
			productsDropdownMobile.style.height = menuHeight + 9 + 'px';
		} else {
			productsDropdownMobile.style.height = 0;
		}

});

productsbtnDesktop.addEventListener('mouseenter', () => {
	const menuHeight = Array.from(productsDropdownDesktop.children).map(item => item.clientHeight).reduce((a, b) => a + b, 0);
	productsDropdownDesktop.style.height = menuHeight + 'px';
})

productsbtnDesktop.addEventListener('mouseleave', () => {
	productsDropdownDesktop.style.height = 0;
})



window.addEventListener('resize', () => {
	nav.classList.remove("active")
	productsDropdownMobile.style.height = 0;
	blurs.classList.remove('active')
	productsDropdownMobile.classList.remove('active')
})




let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});