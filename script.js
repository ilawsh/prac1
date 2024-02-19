let MenuBTN = document.querySelector('.menu')
let CancelMenuBTN = document.querySelector('.x')
let Menu = document.querySelector('.menu-list')
let SectionBar = document.querySelector('.section-container')


MenuBTN.addEventListener('click' , function (){

    Menu.style.right = -2 + '%'
    CancelMenuBTN.style.display = 'block'
    CancelMenuBTN.style.opacity = 1
    SectionBar.style.filter = 'blur(' + 2 + 'px)'

})


CancelMenuBTN.addEventListener('click' , function (){

    Menu.style.right = -100 + '%'
    CancelMenuBTN.style.display = 'none'
    SectionBar.style.filter = 'blur(' + 0 + 'px)'

})
