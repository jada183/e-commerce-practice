<template>
  <div class="container">
    <div class="row mb-2">
      <h3>Productos</h3>
    </div>
    <div class="row mb-4">
      <div class="col-lg-4 col-12 border-box">
        <NuxtLink to="/products?type=laptop">
          <div class="row">
            <h3 class="offset-xl-4 col-xl-4 col-12 align-center">Portátiles</h3>
          </div>
          <div class="row">
            <img
              src="~assets/img/laptop.png"
              width="auto"
              height="220px"
              alt="Portatiles"
              class="col-12 reponsive-category"
            />
          </div>
        </NuxtLink>
      </div>

      <div class="col-lg-4 col-12 border-box">
        <NuxtLink to="/products?type=mobile">
          <div class="row">
            <h3 class="offset-xl-4 col-xl-4 col-12 align-center">Móviles</h3>
          </div>
          <div class="row">
            <img
              src="~assets/img/mobiles.png"
              width="auto"
              height="220px"
              alt="Móviles"
              class="col-12 reponsive-category"
            />
          </div>
        </NuxtLink>
      </div>

      <div class="col-lg-4 col-12 border-box">
        <NuxtLink to="/products?type=desk">
          <div class="row">
            <h3 class="offset-xl-4 col-xl-4 col-12 align-center">Sobremesas</h3>
          </div>
          <div class="row">
            <img
              src="~assets/img/sobremesa.png"
              width="auto"
              height="220px"
              alt="Móviles"
              class="col-12 reponsive-category"
            />
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="row mb-2">
      <h3>Ofertas destacadas</h3>
    </div>
    <div class="row mb-2">
      <div class="col-lg-3 col-6" v-for="offer in offerList">
        <NuxtLink v-bind:to="'/product-detail?id=' + offer.id">
          <offer-container
            v-bind:name="offer.name"
            v-bind:image="offer.image"
            v-bind:price="offer.price"
            v-bind:discount="offer.discount"
            v-bind:stockLimit="offer.stockLimit"
            v-bind:weekOffer="offer.weekOffer"
            v-bind:timeLimitDate="offer.timeLimitDate"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      offerList: []
    };
  },
  methods: {
    getProducts() {
      return axios({
        method: "GET",
        url: "http://localhost:3001/products",
        params: {},
        headers: {}
      })
        .then(response => response.data)
        .then(response => response.filter(r => r.discount > 0))
        .then(response => response.sort((a, b) => (a.discount < b.discount) ? 1 : ((b.discount < a.discount) ? -1 : 0) ).slice(0,4))
        .then(response => {
          this.offerList = response;
          console.log(response);
        });
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>
<style lang="css">
.align-center {
  text-align: center;
}
.border-box {
  border: 1px solid #ddd;
}
.border-box:hover {
  background-color: whitesmoke;
}
</style>
