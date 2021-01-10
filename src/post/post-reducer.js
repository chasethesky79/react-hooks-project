export const postReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_POSTS': 
           return action.posts
        case 'CREATE_POST' :
          const { post } = action;
          return [...state, post]

          default:
            return state;
    }
}