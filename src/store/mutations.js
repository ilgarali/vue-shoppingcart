import Swal from 'sweetalert2'



const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})



export const Added = (state,id) => {
    let item = state.products.find((item) => item.id == id)
    let element = state.cart.findIndex((element) => element.id ==item.id)
  
    
    if (element == -1) {
        state.cart.unshift(item)
        
    }
    else{
       let increase =  state.cart.find((item) => item.id == id)
       increase.quantity += 1

    }
    
    Toast.fire({
        icon: 'success',
        title: 'Item is added successfully'
      })
    

}

export const ITEM_REMOVED = (state,id) => {
    let obj = JSON.parse(JSON.stringify(state.cart))
    obj.splice(obj.findIndex(item => item.id==id),1)
    state.cart = obj
    
}


export const CHECK_DISCOUNT = (state,cuopon) => {
    let obj = JSON.parse(JSON.stringify(state.coupons))
    let found = obj.find((item) => item == cuopon)
    if (found) {
        state.newPrice = true
    }
    
    
    
}