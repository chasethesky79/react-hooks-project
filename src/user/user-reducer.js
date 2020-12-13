export const userReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
        case 'REGISTER': 
          return action.userName;

        case 'LOGOUT':
            return '';
        
        default:
            throw new Error()
    }
}