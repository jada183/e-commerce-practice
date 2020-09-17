<template>
  <div class="container">
    <div class="row justify-content-center mb-5">
      <h3 class="col-md-4 page-info-title">Productos</h3>
    </div>
    <div class="row mb-5">
      <div class="offset-xl-2 col-xl-8 col-8 offset-1">
        <!-- <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Dropdown button</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>-->
        <input type="text" class="form-control" placeholder />
      </div>
      <button class="btn btn-light">Buscar</button>
    </div>
    <div class="row mb-2">
      <div class="col-lg-3 col-6" v-for="offer in offerList">
        <NuxtLink v-bind:to="'/product-detail?id=' + offer.id">
          <offer-container
            class="mt-3"
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
  name: "products",
  data() {
    return {
      type: this.$route.query.type,
      offerList: []
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    showQueryParam() {
      this.type = this.$route.query.type;
      this.getProducts();
    },
    getProducts() {
      return axios({
        method: "GET",
        url: "http://localhost:3001/products",
        params: {},
        headers: {}
      })
      .then(response => response.data)
      .then(response => {
        this.offerList = response;
      }) 
      ;
    }
  },
  created() {},
  watch: {
    $route: "showQueryParam"
  }
};
</script>
<style lang="css" scoped>
offer-container {
  margin-top: 5%;
}
</style>