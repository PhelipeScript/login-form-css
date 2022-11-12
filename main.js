const userPassword = document.querySelector('#user-password')
const eyeIcon = document.querySelector('.eye-icon')

eyeIcon.addEventListener('click', () => {
    
    if (userPassword.type == 'password') {
        userPassword.type = 'text'
        eyeIcon.src ='assets/eye.svg'
    } else {
        userPassword.type = 'password'
        eyeIcon.src ='assets/eye-closed.svg'
    }
})