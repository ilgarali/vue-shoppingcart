<template>
<div class="px-4 px-lg-0">
  

  <div class="pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5" >

          <!-- Shopping cart table -->
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 bg-light">
                    <div class="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Quantity</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Remove</div>
                  </th>
                </tr>
              </thead>
              <tbody v-if="ifItemSelected > 0">
                <tr  v-for="(item) in getCartData" :key="item.id">
                  <th scope="row" class="border-0" >
                    <div class="p-2">
                      <img :src="item.img" alt="" width="70" class="img-fluid rounded shadow-sm">
                      <div class="ml-3 d-inline-block align-middle">
                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">
                            {{item.title}}</a></h5>
                            <span class="text-muted font-weight-normal font-italic d-block">Category: Shoes</span>
                      </div>
                    </div>
                  </th>
                  <td class="border-0 align-middle"><strong>${{item.price}}</strong></td>
                  <td class="border-0 align-middle">
                    <strong>{{item.quantity}}</strong> </td>
                  <td class="border-0 align-middle"><a href="#" @click="remove(item.id)" class="text-dark"><i class="fa fa-trash"></i>Remove</a></td>
                </tr>
               
              </tbody>
              <div v-else class="alert alert-danger">
              NO ITEM SELECTED 
            </div>
            </table>
            
          </div>
          <!-- End -->
        </div>
      </div>

      <div class="row py-5 p-4 bg-white rounded shadow-sm">
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
         
          <div class="p-4">
            <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
            <h2>Cuopon Code: <h3 class="text-primary">10%cuopon </h3> </h2>
            <div class="input-group mb-4 border rounded-pill p-2">
              <input v-model="cuopon" type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0">
              <div class="input-group-append border-0">
                <button @click="makeDiscount" id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
              </div>
            </div>
          </div>
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
          <div class="p-4">
            <p class="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
            <textarea name="" cols="30" rows="2" class="form-control"></textarea>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
          <div class="p-4">
            <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex justify-content-between py-3 border-bottom">
                <strong class="text-muted">Order Subtotal </strong>
                <strong>${{ newPrice ? discountedPrice : getPrice}}</strong>
                </li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>$0.00</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                <h5 class="font-weight-bold">${{ newPrice ? discountedPrice +10 : getPrice +10}}</h5>
              </li>
            </ul><a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
    data() {
      return {
        cuopon:'',
      
      }
    },
computed: {
    ...mapGetters(['getCartData','getPrice','ifItemSelected','discountedPrice']),
    ...mapState(['cart','coupons','newPrice']),
  
    
},
methods: {
  makeDiscount(){
   
   this.checkDiscount(this.cuopon)
    
  },
  remove(id) {
  
    
    this.removeItem(id)
  },
  ...mapActions(['removeItem','checkDiscount'])
},

}
</script>

<style scoped>


body {
  background: #eecda3;
  background: -webkit-linear-gradient(to right, #eecda3, #ef629f);
  background: linear-gradient(to right, #eecda3, #ef629f);
  min-height: 100vh;
}

</style>