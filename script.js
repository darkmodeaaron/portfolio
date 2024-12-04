const modeBtn = document.querySelectorAll('.mode-svg')
const htmlSkill = document.querySelector('.html-skill')
const cssSkill = document.querySelector('.css-skill')
const sassSkill = document.querySelector('.sass-skill')
const jsSkill = document.querySelector('.js-skill')
const reactSkill = document.querySelector('.react-skill')
const tailwindSkill = document.querySelector('.tailwind-skill')

const figma = document.querySelectorAll('.figma-icon')

const mode = document.querySelector('.mode-fill')

const exitCardBtn = document.querySelectorAll('.exit-wrapper')

const exitBtn = document.querySelectorAll('.exitBtn')

const learningsImg = document.querySelector('.learningsImg')



modeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('darkmode')
    
        if (document.body.classList.contains('darkmode')) {
            htmlSkill.src = '/images/icons/htmldark.png'
            cssSkill.src = '/images/icons/cssdark.png'
            sassSkill.src = '/images/icons/sassdark.png'
            jsSkill.src = '/images/icons/jsdark.png'
            reactSkill.src = '/images/icons/reactdark.png'
            tailwindSkill.src = '/images/icons/tailwinddark.png'
            learningsImg.src = '/images/learningsDarkImg.png'
    
            figma.forEach(fig => {
                fig.src = "/images/icons/figmadark.png"
            })

            exitBtn.forEach(btn => {
                btn.src = "/images/icons/adddark.png"
            })


        } else {
            htmlSkill.src = '/images/icons/html.png'
            cssSkill.src = '/images/icons/css.png'
            sassSkill.src = '/images/icons/sass.png'
            jsSkill.src = '/images/icons/js.png'
            reactSkill.src = '/images/icons/react.png'
            tailwindSkill.src = '/images/icons/tailwind.png'
            learningsImg.src = '/images/learningsImg.png'
    
            figma.forEach(fig => {
                fig.src = "/images/icons/figmalight.png"
            })

            exitCardBtn.forEach(btn => {
                btn.src = "/images/icons/addlight.png"
            })
        }
    
        mode.classList.toggle('active')
    
    })
})


const learningsDetails = document.querySelector('.learnings-details')
const learningsMobileCard = document.querySelector('.learnings-mobile-card')

learningsDetails.addEventListener('click', () => {
    learningsMobileCard.style.display = 'flex'
    document.body.style.overflow = 'hidden'
})

const acsDetails = document.querySelector('.acs-details')
const acsMobileCard = document.querySelector('.acs-mobile-card')

acsDetails.addEventListener('click', () => {
    acsMobileCard.style.display = 'flex'
    document.body.style.overflow = 'hidden'
})

const audio42Details = document.querySelector('.audeio42-details')
const audio42MobileCard = document.querySelector('.audio42-mobile-card')

audio42Details.addEventListener('click', () => {
    audio42MobileCard.style.display = 'flex'
    document.body.style.overflow = 'hidden'
})




exitCardBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        learningsMobileCard.style.display = 'none'
        acsMobileCard.style.display = 'none'
        audio42MobileCard.style.display = 'none'
        sizecompMobileCard.style.display = 'none'
        sizecompMobileCard2.style.display = 'none'
        document.body.style.overflow = 'scroll'
    })
})