window.addEventListener('keydown', function(element) {
    const press = document.querySelector('.press')
    const wrapper = document.querySelector('.wrapper')
    const key = document.querySelector('.key')
    const code = document.querySelector('.code')

    press.style.display = 'none'
    wrapper.style.display = 'flex'

    key.textContent = element.key
    code.textContent = element.code
})