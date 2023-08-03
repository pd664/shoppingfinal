const cartAllProducts = {
  cartProducts: []
}

const cartReducer = (state = cartAllProducts, action) => {
  switch(action.type) {
    case 'ADDTOCART' : {

      return {...state, cartProducts: [...state.cartProducts, action.payload.productId]}
    }

    case "INCREMENT": {
      return {
        ...state, 
        cartProducts: state.cartProducts.map((item) => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
      }
    }
    
    case "DECREMENT": {
      console.log(action.payload.id);
      return {
        ...state, 
        cartProducts: state.cartProducts.map((item) => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
      }
    }
    case "DELETE": {
      console.log("DELETE", action.payload.id);
      return {...state, 
      cartProducts: state.cartProducts.filter(val => val.id !== action.payload.id)}
    }
    default : return state
  }
}

export default cartReducer
