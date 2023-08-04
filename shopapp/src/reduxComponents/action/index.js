export const fetchAllData = (data) => {
    // console.log("dtaa")
    return {
        type: 'FETCHALLDATA',
        payload: {
            data: data 
        }
    }
}

export const addToCart = (productId) => {
    console.log("addToCart", productId)
    return {
        type: 'ADDTOCART',
        payload: {
            productId: productId,
        }
    }
}

export const setCategory = (category) => {
    console.log("setCategory", category)
    return {
        type: 'SETCATREGORY',
        payload: {
            category: category
        }
    }
} 