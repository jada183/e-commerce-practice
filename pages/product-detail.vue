<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-sm-12">
        <img
          v-bind:src="image"
          width="100%"
          height="260px"
          alt="imagen producto"
          class="position-relative responsive-product-detail"
        />
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="row">
          <h5 class="col-12">{{name}}</h5>
        </div>
        <div class="row mt-3">
          <h1 class="price col-4">{{price}} €</h1>
          <div class="col-2" v-if="discount">
            <div class="text-aling-center">
              <span>Dto</span>
            </div>
            <div class="discount text-aling-center">{{discount}} %</div>
          </div>
        </div>
        <div class="row mt-5">
          <b class="col-2">Marca:</b>
          <span class="offset-2 col-4">{{ brand}}</span>
        </div>
        <div class="row mt-3">
          <b class="col-2">Envio:</b>
          <span class="offset-2 col-4">Desde: {{ shippingConst }} €</span>
        </div>
        <div class="row mt-3">
          <b class="col-2">Cantidad:</b>
          <quantity class="offset-2 col-4" v-bind:quantity="quantity" />
        </div>
        <div class="row mt-3">
          <b class="col-2">Disponibilidad</b>
          <span class="offset-2 col-6 stockOk" v-if="stock">En stock</span>
          <span class="offset-2 col-6 stockNoOk" v-if="!stock">No disponible</span>
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
          <button class="btn btn-primary col-4 offset-1">
            <img
              src="~assets/icons/carro-inteligente.png"
              width="25px"
              height="25px"
              class="color-white"
              alt="carrito de la compra"
            />
            <span class="pl-3">Añadir a carrito</span>
          </button>
        </div>
      </div>
    </div>
    <div class="row feature-box-margin">
        <hr class="col-12" />
    </div>
    <div class="row ">
      <div>
        <h5 class="col-3">Características</h5>
      </div>
    </div>
    <div class="row">
        <div v-html="features" class="col-12 ">
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-detail",
  data() {
    return {
      name: "HP 15S-fq1095ns Intel Core i5-1035G1/16GB/512GB",
      image: "_nuxt/assets/img/sobremesa.png",
      price: "598",
      discount: 20,
      brand: "HP Electronics",
      shippingConst: "5.25",
      quantity: 1,
      stock: true,
      favorite: false,
      features: "<p><ul><li>Productividad y seguridad mejoradas</li> <li>Fiabilidad extrema</li> <li>Asistencia organizativa</li></ul></p>"
    };
  },
  methods: {
    changeFavoriteOption() {
      this.favorite = !this.favorite;
    }
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
</style>