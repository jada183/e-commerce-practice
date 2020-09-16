<template>
  <div class="container">
    <div class="row mb-2">
      <h3>Productos</h3>
    </div>
    <div class="row mb-4">
      <div class="col-4 border-box">
        <NuxtLink to="/products?type=laptop">
          <div class="row">
            <h3 class="offset-xl-4 col-xl-4 col-12align-center">Portátiles</h3>
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

      <div class="col-4 border-box">
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

      <div class="col-4 border-box">
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
export default {
  name: "index",
  data() {
    return {
      offerList: [
        {
          name: "portatil prueba 1",
          price: 698,
          image: "_nuxt/assets/img/sobremesa.png",
          discount: 30,
          stockLimit: 75,
          timeLimitDate: null,
          weekOffer: false,
          id:1
        },
        {
          name: "portatil prueba 2",
          price: 998,
          image: "_nuxt/assets/img/laptop.png",
          discount: 20,
          stockLimit: null,
          timeLimitDate: null,
          weekOffer: true,
          id:2
        },
        {
          name: "portatil prueba 3",
          price: 598,
          image: "_nuxt/assets/img/sobremesa.png",
          discount: 35,
          stockLimit: null,
          timeLimitDate: '2020/09/29',
          weekOffer: false,
          id:3
        },
        {
          name: "portatil prueba 4",
          price: 898,
          image: "_nuxt/assets/img/laptop.png",
          discount: 20,
          stockLimit: null,
          timeLimitDate: null,
          weekOffer: true,
          id:4
        }
      ]
    };
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
