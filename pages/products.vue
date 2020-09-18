<template>
  <div class="container">
    <div class="row justify-content-center mb-5">
      <h3 class="col-md-4 page-info-title">Productos</h3>
    </div>
    <div class="row mb-5">
      <select name="optionsFilter" class="col-2 offset-1 offset-lg-1" v-model="filterCategory">
        <option v-for="option in optionsList" v-bind:value="option">{{option}}</option>
      </select>
      <div class="col-lg-7 col-7">
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
        <input type="text" class="form-control" placeholder v-model="searchValue" />
      </div>
      <button class="btn btn-light" v-on:click="getProducts()">Buscar</button>
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
      offerList: [],
      searchValue: "",
      filterCategory: "nombre",
      optionsList: ["nombre", "categoria", "marca"]
    };
  },
  mounted() {
    this.searchValuePreload();
    this.type
      ? (this.filterCategory = "categoria")
      : (this.filterCategory = "nombre");
    this.getProducts();
  },
  methods: {
    showQueryParam() {
      this.type = this.$route.query.type;
      this.type
        ? (this.filterCategory = "categoria")
        : (this.filterCategory = "nombre");
      this.searchValuePreload();
      this.getProducts();
    },
    getProducts() {
      let parameters = {};
      if (this.searchValue) {
        switch (this.filterCategory) {
          case "nombre": {
            parameters = { name: this.searchValue };
            break;
          }
          case "categoria": {
            switch (this.searchValue) {
              case "portatiles": {
                parameters = { category: "laptop" };
                break;
              }
              case "sobremesa": {
                parameters = { category: "desk" };
                break;
              }
              case "moviles": {
                parameters = { category: "mobile" };
                break;
              }
              default: {
                parameters = {};
              }
            }

            break;
          }
          case "marca": {
            parameters = { brand: this.searchValue };
            break;
          }
          default: {
            break;
          }
        }
      }
      return axios({
        method: "GET",
        url: "http://localhost:3001/products",
        params: parameters,
        headers: {}
      })
        .then(response => response.data)
        .then(response => {
          this.offerList = response;
        });
    },
    searchValuePreload() {
      switch (this.type) {
        case "laptop": {
          this.searchValue = "portatiles";
          break;
        }
        case "desk": {
          this.searchValue = "sobremesa";
          break;
        }
        case "mobile": {
          this.searchValue = "moviles";
          break;
        }
        default: {
          this.searchValue = "";
          break;
        }
      }
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