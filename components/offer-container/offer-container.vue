<template>
  <div class="border-box">
    <div>
      <div class="discount-container">{{discount}}%</div>
      <img
        v-bind:src="image"
        width="100%"
        height="160px"
        alt="imagen producto"
        class="position-relative imgOffer"
      />
    </div>
    <div class="row mt-10">
      <span class="col-12">{{ name }}</span>
    </div>
    <div class="row">
        <span class="col-xl-3 col-5">Precio:</span>
        <span class="price-value col-xl-2 col-6">{{price}}€</span>
    </div>
    <div class="row" v-if="stockLimit">
        <span class="col-12 alert-text">Quedan {{stockLimit}} unidades</span>
    </div>
     <div class="row" v-if="weekOffer">
        <span class="col-12 alert-text">Oferta solo esta semana</span>
    </div>
    <div class="row" v-else-if="timeLimitDate">
        <span class="col-12 alert-text">Fecha limite: {{ timeLimitDate }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "offer-container",
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    discount: {
      type: Number,
      required: true
    },
    stockLimit: {
      type: Number,
      required: false
    },
    timeLimitDate: {
      type: String,
      required: false
    },
    weekOffer: {
      type: Boolean,
      required: false
    }
  }
};
</script>
<style scoped lang="css">
.border-box {
  border: 1px #ddd solid;
}
.position-relative {
  position: relative;
}

.discount-container {
  top: 0;
  left: 0;
  padding: 1%;
  width: 20%;
  background-color: red;
  color: white;
}
.row {
  margin:2.5%;
}
.price-value {
    color: red;
    font-weight: bold;
}
.alert-text {
    color: red;
}
</style>