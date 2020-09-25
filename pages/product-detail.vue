<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-12">
        <img
          v-bind:src="product.image"
          width="100%"
          height="260px"
          alt="imagen producto"
          class="position-relative responsive-product-detail"
        />
      </div>
      <div class="col-lg-6 col-12">
        <div class="row">
          <h5 class="col-12">{{product.name}}</h5>
        </div>
        <div class="row mt-3">
          <h1 class="price col-4">{{product.price}} €</h1>
          <div class="col-2" v-if="product.discount">
            <div class="text-aling-center">
              <span>Dto</span>
            </div>
            <div class="discount text-aling-center">{{product.discount}} %</div>
          </div>
        </div>
        <div class="row mt-5">
          <b class="col-lg-2 col-6">Marca:</b>
          <span class="offset-lg-2 offset-0 col-6">{{product.brand}}</span>
        </div>
        <div class="row mt-3">
          <b class="col-lg-2 col-6">Envio:</b>
          <span class="offset-lg-2 col-6">Desde: {{product.shippingConst }} €</span>
        </div>
        <div class="row mt-3">
          <b class="col-lg-2 col-6">Cantidad:</b>
          <quantity class="offset-lg-2 col-6 offset-0 col-lg-4" v-bind:quantity="quantity" />
        </div>
        <div class="row mt-3">
          <b class="col-lg-2 col-6">Disponibilidad</b>
          <span class="offset-lg-2 offset-0 col-6 stockOk" v-if="product.stock">En stock</span>
          <span class="offset-lg-2 offset-0 col-6 stockNoOk" v-if="!product.stock">No disponible</span>
        </div>
        <div class="row mt-5">
          <div class="col-2">
            <button class="favoriteButton" v-on:click="changeFavoriteOption()">
              <img
                src="~assets/icons/corazon-rojo.svg"
                width="80%"
                height="80%"
                alt="Corazón rojo"
                v-if="favorite"
              />
              <img
                src="~assets/icons/corazon-gris.svg"
                width="80%"
                height="80%"
                alt="Corazón gris"
                v-if="favorite === false"
              />
            </button>
          </div>
          <button class="btn btn-primary col-6 offset-1">
            <img
              src="~assets/icons/carro-inteligente.png"
              width="25px"
              height="25px"
              alt="carrito de la compra"
              class="caddy-button"
            />
            <span class="pl-3 font-size-fix">Añadir a carrito</span>
          </button>
        </div>
      </div>
    </div>
    <div class="row feature-box-margin">
      <hr class="col-12" />
    </div>
    <div class="row">
      <div>
        <h5 class="col-3">Características</h5>
      </div>
    </div>
    <div class="row">
      <div v-html="product.features" class="col-12 features"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "product-detail",
  data() {
    return {
      product: {
        name: "HP 15S-fq1095ns Intel Core i5-1035G1/16GB/512GB",
        image: "_nuxt/assets/img/sobremesa.png",
        price: 598,
        discount: 20,
        brand: "HP Electronics",
        shippingConst: 5.25,
        stock: true,
        features:
          "<p><ul><li>Productividad y seguridad mejoradas</li> <li>Fiabilidad extrema</li> <li>Asistencia organizativa</li></ul></p>"
      },
      id: this.$route.query.id,
      quantity: 1,
      favorite: false
    };
  },
  methods: {
    changeFavoriteOption() {
      this.favorite = !this.favorite;
    },
    showQueryParam() {
      this.id = this.$route.query.id;
      this.getProduct();
    },
    getProduct() {
      let parameters = { id: this.id };
      return axios({
        method: "GET",
        url: "http://localhost:3001/products",
        params: parameters,
        headers: {}
      })
        .then(response => response.data)
        .then(response => {
          if (response) {
            this.product = response[0];
          }
        });
    }
  },
  mounted() {
    this.getProduct();
  },
  watch: {
    $route: "showQueryParam"
  }
};
</script>
<style scoped class="css">
.flex-container-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.price {
  color: darkblue;
}
.discount {
  border-radius: 4px;
  background-color: red;
  color: white;
}
.stockOk {
  border-radius: 4px;
  background-color: lightgreen;
  color: darkgreen;
}
.stockNoOk {
  border-radius: 4px;
  background-color: red;
  color: white;
}
.favoriteButton {
  padding: 5%;
}
.feature-box-margin {
  margin-top: 15%;
}
@media screen and (max-width: 992px) {
  .discount {
    font-size: 2em;
  }
  span {
    font-size: 2em;
  }
  .font-size-fix {
    font-size: 1em !important;
  }
  .features {
    font-size: 2em;
  }
}
</style>