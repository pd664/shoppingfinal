let subTotal = 0;

const subTotalReducer = (state = subTotal, action) => {
    // console.log("state", state)
    // console.log(action.payload)
    switch(action.type) {
        case "SUBTOTAL" : {
            state = action.payload.subtotal
            return state;
        }
        default :
            return state
    }
}

export default subTotalReducer;