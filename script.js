const modeBtn = document.querySelectorAll('.mode-svg')
const htmlSkill = document.querySelector('.html-skill')
const cssSkill = document.querySelector('.css-skill')
const sassSkill = document.querySelector('.sass-skill')
const jsSkill = document.querySelector('.js-skill')
const reactSkill = document.querySelector('.react-skill')

const figma = document.querySelectorAll('.fig')

const mode = document.querySelector('.fill')

modeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('darkmode')
    
        if (document.body.classList.contains('darkmode')) {
            htmlSkill.src = '/images/htmldark.png'
            cssSkill.src = '/images/cssdark.png'
            sassSkill.src = '/images/sassdark.png'
            jsSkill.src = '/images/jsdark.png'
            reactSkill.src = '/images/reactdark.png'
    
            figma.forEach(fig => {
                fig.src = "/images/figmadark.png"
            })
        } else {
            htmlSkill.src = '/images/html.png'
            cssSkill.src = '/images/css.png'
            sassSkill.src = '/images/sass.png'
            jsSkill.src = '/images/js.png'
            reactSkill.src = '/images/react.png'
    
            figma.forEach(fig => {
                fig.src = "/images/figmalight.png"
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

const sizecompDetails = document.querySelector('.sizecomp-details')
const sizecompMobileCard = document.querySelector('.sizecomp-mobile-card')

sizecompDetails.addEventListener('click', () => {
    sizecompMobileCard.style.display = 'flex'
    document.body.style.overflow = 'hidden'
})


const exitCardBtn = document.querySelectorAll('.exit-wrapper')

exitCardBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        learningsMobileCard.style.display = 'none'
        acsMobileCard.style.display = 'none'
        sizecompMobileCard.style.display = 'none'
        document.body.style.overflow = 'scroll'
    })
})