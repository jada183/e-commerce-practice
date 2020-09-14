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
         <div class="row  mt-3">
            <b class="col-2">Envio:</b>
            <span class="offset-2 col-4">Desde: {{  shippingConst }} €</span>
        </div>
        <div class="row">
            
        </div>
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
      brand: 'HP Electronics',
      shippingConst: "5.25"
    };
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
</style>