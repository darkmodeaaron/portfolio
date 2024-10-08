const modeBtn = document.querySelectorAll('.mode-svg')
const htmlSkill = document.querySelector('.html-skill')
const cssSkill = document.querySelector('.css-skill')
const sassSkill = document.querySelector('.sass-skill')
const jsSkill = document.querySelector('.js-skill')
const reactSkill = document.querySelector('.react-skill')

const figma = document.querySelectorAll('.figma-icon')

const mode = document.querySelector('.mode-fill')

const exitCardBtn = document.querySelectorAll('.exit-wrapper')

const exitBtn = document.querySelectorAll('.exitBtn')

const learningsImg = document.querySelector('.learningsImg')



modeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('darkmode')
    
        if (document.body.classList.contains('darkmode')) {
            htmlSkill.src = '/images/htmldark.png'
            cssSkill.src = '/images/cssdark.png'
            sassSkill.src = '/images/sassdark.png'
            jsSkill.src = '/images/jsdark.png'
            reactSkill.src = '/images/reactdark.png'
            learningsImg.src = '/images/learningsDarkImg.png'
    
            figma.forEach(fig => {
                fig.src = "/images/figmadark.png"
            })

            exitBtn.forEach(btn => {
                btn.src = "/images/adddark.png"
            })


        } else {
            htmlSkill.src = '/images/html.png'
            cssSkill.src = '/images/css.png'
            sassSkill.src = '/images/sass.png'
            jsSkill.src = '/images/js.png'
            reactSkill.src = '/images/react.png'
            learningsImg.src = '/images/learningsImg.png'
    
            figma.forEach(fig => {
                fig.src = "/images/figmalight.png"
            })

            exitCardBtn.forEach(btn => {
                btn.src = "/images/addlight.png"
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

const sizecompDetails2 = document.querySelector('.sizecomp-details2')
const sizecompMobileCard2 = document.querySelector('.sizecomp-mobile-card2')

sizecompDetails2.addEventListener('click', () => {
    sizecompMobileCard2.style.display = 'flex'
    document.body.style.overflow = 'hidden'
})




exitCardBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        learningsMobileCard.style.display = 'none'
        acsMobileCard.style.display = 'none'
        sizecompMobileCard.style.display = 'none'
        sizecompMobileCard2.style.display = 'none'
        document.body.style.overflow = 'scroll'
    })
})