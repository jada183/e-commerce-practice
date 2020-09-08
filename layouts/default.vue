<template>
  <div class="wrapper">
    <nav id="sidebar" class="active">
      <nav class="navbar navbar-expand-lg navbar-light sidebar-header">
        <span>
          <img src="~assets/icons/usuario.svg" alt="icono de usuario" width="25px" height="25px" />
          Hola Jasondfq
        </span>
      </nav>
      <div class="menu-container">
        <Menu />
      </div>
    </nav>
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div>
            <button type="button" class="btn" v-on:click="sidebarCollapse">
              <img
                src="~assets/icons/parrilla.svg"
                width="25px"
                height="25px"
                alt="menu de hamburguesa"
              />
            </button>
            <NuxtLink to="/">
              <button type="button" class="btn">
                <img
                  src="~assets/icons/logo_small.png"
                  width="auto"
                  height="30px"
                  alt="logo de la tienda"
                />
              </button>
            </NuxtLink>
          </div>
          <NuxtLink to="/caddy">
            <button class="btn">
              <img
                src="~assets/icons/carro-inteligente.png"
                width="25px"
                height="25px"
                alt="carrito de la compra"
              />
              <span>Mi carrito</span>
            </button>
          </NuxtLink>
        </div>
      </nav>
      <main class="main-containter">
        <Nuxt />
      </main>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  methods: {
    sidebarCollapse() {
      console.log("HOLA MUNDO");
      document.getElementById("sidebar").className === "active"
        ? (document.getElementById("sidebar").className = "")
        : (document.getElementById("sidebar").className = "active");
      //  $('#sidebar').toggleClass('active');
    }
  }
};
</script>