<template>
  <div class="menu-content">
    <h5>Productos</h5>
    <ul>
      <NuxtLink to="/products?type=laptop">
        <li>Portátiles</li>
      </NuxtLink>
      <NuxtLink to="/products?type=desk">
        <li>Ordenadores de Sobremesa</li>
      </NuxtLink>
      <NuxtLink to="/products?type=mobile">
        <li>Móviles</li>
      </NuxtLink>
    </ul>
    <hr />
    <h5>Ofertas</h5>
    <ul>
      <NuxtLink to="/offers?type=week">
        <li>Chollos de la semana</li>
      </NuxtLink>
      <NuxtLink to="/offers?type=limitedStock">
        <li>Ofertas con limite de stock</li>
      </NuxtLink>
      <NuxtLink to="/offers?type=limitedHours">
        <li>Ofertas con horas limitadas</li>
      </NuxtLink>
    </ul>
    <hr />
    <h5>Mi cuenta</h5>
    <ul>
      <NuxtLink to="/userInfo">
        <li>Datos de mi cuenta</li>
      </NuxtLink>
      <NuxtLink to="/favorites">
        <li>Mis favoritos</li>
      </NuxtLink>
    </ul>
  </div>
</template>
<script>
import { OffersQueryParams }  from "assets/const/MENU_QUERY_PARAMS"
export default {
    name: "sidebar-menu",
    data() {
        return {
            limitedStockParamValue: OffersQueryParams.limitedStockParamValue
        }
    },
}
</script>
<style lang='sass' scoped>
  @import './Menu'
</style>