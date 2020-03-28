<template>
<div class="container">
  <div class="row">
    <div class="col-md-3" v-for="(product) in products" :key="product.id">
      <div class="card">
        <img class="card-img" :src="product.img" alt="Vans">
        <div class="card-img-overlay d-flex justify-content-end">
          <a href="#" class="card-link text-danger like">
            <i class="fas fa-heart"></i>
          </a>
        </div>
        <div class="card-body" >
          <h4 class="card-title">{{product.title}}</h4>
          
          <p class="card-text">
            {{product.description}}
          </p>
         
          <div class="buy d-flex justify-content-between align-items-center">
            <div class="price text-success"><h5 class="mt-4">$ {{product.price}}</h5></div>
       
              
          </div>
          
        </div>
        
      </div>
            <button @click="addTo(product.id)" class="btn btn-danger btn-block">
               <i class="fas fa-shopping-cart"></i> Add to Cart</button>
    </div>
  </div>
  <div >
    
  </div>
</div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  name: 'Products',
  
  computed: {
    ...mapState(['products'])
  },
  methods: {
   
 
    addTo(id){
         
      this.addToCart(id);
   
      
    },
    ...mapActions(['addToCart'])
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding: 2rem 0rem;
}

.like {
  font-size: 1.5rem;
}
</style>
