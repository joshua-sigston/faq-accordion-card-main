const arrow = document.querySelectorAll('.arrow')
const question = document.querySelectorAll('.question')

question.forEach(item => item.addEventListener('click', () => {
    // rotate arrow
    item.childNodes[1].classList.toggle('arrow_rotate')

    // change question font to bold and lower bottom border
    console.log(item.nextElementSibling)
    item.classList.toggle('font_bold')
    item.classList.toggle('border_positioning')
    item.classList.toggle('border_normal')

    // answer reveal
    item.nextElementSibling.classList.toggle('reveal')
}))


