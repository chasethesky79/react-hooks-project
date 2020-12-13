export const loginAction = (userName) => ({ type: 'LOGIN', userName})
export const registerAction = (userName) => ({ type: 'REGISTER', userName})
export const logoutAction = () => ({type: 'LOGOUT'})