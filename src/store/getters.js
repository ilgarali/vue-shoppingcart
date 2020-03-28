import Swal from 'sweetalert2'



export const getCartData = (state) => {
    return JSON.parse(JSON.stringify(state.cart))
    
    
}




export const getPrice = (state) => {
   let data = JSON.parse(JSON.stringify(state.cart))
   let price = 0; 
   data.forEach(element => {
        price += element.price * element.quantity
    });

    
    
    return price

}

export const ifItemSelected = (state) => {
    let data = JSON.parse(JSON.stringify(state.cart))
    return data.length
}

export const discountedPrice = (state) => {
    
    let data = JSON.parse(JSON.stringify(state.cart))
    let price = 0; 
    data.forEach(element => {
         price += element.price * element.quantity
     });
 
     let discounted = price  - (price / 10)
     
 
        Swal.fire(
            'Discount is Made',
            'New Price is: $ ' + discounted,
            'success'
          )
     
    

     return discounted
}