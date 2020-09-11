<template>
  <div class="wrapper">
    <nav id="sidebar" class="active">
      <NuxtLink v-bind:to="navigationLogin">
        <nav
          class="navbar navbar-expand-lg navbar-light sidebar-header userInfo"
          aria-label="menu-header"
        >
          <span v-if="login">
            <img src="~assets/icons/usuario.svg" alt="icono de usuario" width="25px" height="25px" />
            Hola {{ userName }}
          </span>
          <span v-if="!login" class="link">
            <img src="~assets/icons/usuario.svg" alt="icono de usuario" width="25px" height="25px" />
            Hola, Identifícate.
          </span>
        </nav>
      </NuxtLink>
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
          <div>
            <NuxtLink to="/userInfo" v-if="login">
              <button class="btn button-userInfo">
                <div>
                  <div class="nameHeaderTitle">Hola {{ userName }}</div>
                  <div>Mi cuenta</div>
                </div>
              </button>
            </NuxtLink>
            <NuxtLink to="/login" v-if="!login">
              <button class="btn button-userInfo">
                <div>
                  <div>Iniciar sesión</div>
                </div>
              </button>
            </NuxtLink>
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
        </div>
      </nav>
      <main class="main-containter">        
          <Nuxt />
      </main>
      <!-- Footer -->
      <footer class=" page-footer font-small blue pt-2 pb-2 bg-light">
        <div class="py-3 container-fluid">
          <div>
            <span>Contacto a jason.francoquintero@plexus.es</span>
            <!-- <span>Tel: 60739143</span> -->
          </div>
          <NuxtLink to="/help">
            <button type="button" class="btn">
              <img
                src="~assets/icons/pregunta.svg"
                width="25px"
                height="25px"
                alt="icono de interrogante para ayuda"
              />
            </button>
          </NuxtLink>
        </div>
      </footer>
      <!-- Footer -->
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      login: false,
      navigationLogin: "/registry",
      userName: "Jason"
    };
  },
  methods: {
    sidebarCollapse() {
      document.getElementById("sidebar").className === "active"
        ? (document.getElementById("sidebar").className = "")
        : (document.getElementById("sidebar").className = "active");
    }
  },
  created() {
    this.navigationLogin = this.login ? "/userInfo" : "/login";
  }
};
</script>
<style lang="css">
.userInfo {
  cursor: pointer;
}
.nameHeaderTitle {
  font-size: 0.8rem;
}
.button-userInfo {
  text-align: left;
}
.button-userInfo:hover {
  border: 2px solid lightblue;
}
.container {
  display: flex;
  flex-direction: column;
}

footer {
  width: 100%;
  border: 1px #ddd solid;
  color: black;
  align-items: center;
  align-self: flex-end;  
}
footer .container-fluid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
main {
  flex: 1 0 auto;
}
</style>