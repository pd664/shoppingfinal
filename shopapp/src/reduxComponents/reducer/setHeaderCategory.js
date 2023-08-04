const category = ''

const setHeaderCatgory = (state = category, action) => {
    switch (action.type) {
        case 'SETCATREGORY' : {
            state = action.payload.category;
            return state;
        }
        default: return state;
    }
}

export default setHeaderCatgory