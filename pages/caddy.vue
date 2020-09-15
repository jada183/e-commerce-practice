<template>
  <div class="container">
    <div class="row">
      <h3>Artículos de tu cesta</h3>
    </div>
    <div class="row">
      <div class="col-lg-8 col-12">
        <div class="table-container">
          <div class="row table-header bg-light">
            <span class="col-6">ARTÍCULO</span>
            <span class="col-2">PRECIO</span>
            <span class="col-2">UNIDADES</span>
            <span class="col-2 last-column">TOTAL</span>
          </div>
          <div class="row mb-3 content-row" v-for="item in itemList">
            <div class="col-6 item-title-img-link">
              <NuxtLink
                v-bind:to="'/product-detail?id=' + item.id"
                class="item-title-img-container"
              >
                <img
                  v-bind:src="item.image"
                  class="col-4 caddy-item-image"
                  height="100%"
                  alt="Imagen del producto"
                />
                <div class="col-7">
                  <span>{{ item.name }}</span>
                </div>
              </NuxtLink>
            </div>

            <span class="col-2">{{item.price}}€</span>
            <span class="col-2">
              <quantity v-bind:quantity="item.quantity" />
            </span>
            <span class="col-2 last-column">{{ item.price *item.quantity}}€</span>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-lg-4 col-10 offset-1 offset-lg-0">
            <button class="btn btn-light">
              <img
                src="~assets/icons/basura.svg"
                width="25px"
                height="25px"
                alt="Contenedor de basura"
              />
              <span class="pl-3">Limpiar carrito</span>
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-12">
        <div class="row">
          <h5 class="col-lg-4 offset-lg-1 offset-1 col-4">TOTAL:</h5>
          <h5 class="col-lg-4 offset-2 col-4 alig-right">{{total}}€</h5>
        </div>
        <div class="row mt-3 mb-5">
          <div class="col-12">
            <button class="btn btn-primary col-10 offset-1">Realizar pedido</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "caddy",
  data() {
    return {
      itemList: [
        {
          name:
            "Acer Aspire 3 A315-56-52KD Intel Core i5-1035G1/12GB/512GB SSD/15.6",
          image: "_nuxt/assets/img/laptop.png",
          price: 798,
          quantity: 1,
          id: 1
        },
        {
          name: "PcCom Bronze Intel Core i3-9100F/8GB/240GB SSD+1TB/GTX1650",
          image: "_nuxt/assets/img/sobremesa.png",
          price: 525,
          quantity: 2,
          id: 2
        },
        {
          name: "PcCom Bronze Intel Core i3-9100F/8GB/240GB SSD+1TB/GTX1650",
          image: "_nuxt/assets/img/sobremesa.png",
          price: 525,
          quantity: 2,
          id: 2
        }
      ],
      total: 150
    };
  }
};
</script>
<style class="css" scoped>
.table-header {
  padding: 0.75rem;
}
.content-row {
  padding: 0.75rem;
}
.item-title-img-container {
  display: flex;
}
.item-title-img-link {
  display: flex;
}

.last-column {
  display: flex;
  justify-content: flex-end;
}
.table-container {
  border-bottom: 1px solid #ddd;
  margin-bottom: 5%;
}
</style>