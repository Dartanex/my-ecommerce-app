const emailValidation = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
    message: 'El email ingresado no es válido'
}
  
const minPassword = {
    value: 8,
    message: 'Password must be more than 8 characters'
}
  
const maxPassword = {
    value: 24,
    message: 'Password must be less than 24 characters'
}

export {emailValidation, minPassword, maxPassword}