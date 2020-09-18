<template>
  <div class="containter">
    <div class="row justify-content-center mb-5">
      <h3 class="col-md-4 page-info-title">Ofertas</h3>
    </div>
    <div class="row mb-5">
      <select class="col-2 offset-1 offset-lg-1" v-model="filterCategory">
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
  name: "offers",
  data() {
    return {
      type: this.$route.query.type,
      filterCategory: "nombre",
      searchValue: "",
      optionsList: ["nombre", "categoria", "marca"],
      offerList: []
    };
  },
  methods: {
    showQueryParam() {
      this.type = this.$route.query.type;
      this.type
        ? (this.filterCategory = "categoria")
        : (this.filterCategory = "nombre");
      this.getProducts();
    },
    getProducts() {
      let parameters = {};
      switch (this.type) {
        case "week": {
          parameters.weekOffer = true;
          break;
        }
        case "limitedStock": {
          parameters.stockLimitBool = true;
          break;
        }
        case "limitedHours": {
          parameters.timeLimitDateBool = true;
        }
      }
      if (this.searchValue) {
        switch (this.filterCategory) {
          case "nombre": {
            parameters.name = this.searchValue;
            break;
          }
          case "categoria": {
            switch (this.searchValue) {
              case "portatiles": {
                parameters.category = "laptop";
                break;
              }
              case "sobremesa": {
                parameters.category = "desk";
                break;
              }
              case "moviles": {
                parameters.category = "mobile";
                break;
              }
              default: {
                parameters = {};
              }
            }

            break;
          }
          case "marca": {
            parameters.brand = this.searchValue;
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
        .then(response => response.filter(r => r.discount > 0))
        .then(response => {
          this.offerList = response;
        });
    }
  },
  mounted() {
    this.getProducts();
  },
  watch: {
    $route: "showQueryParam"
  }
};
</script>

<style scoped lang="css">
</style>