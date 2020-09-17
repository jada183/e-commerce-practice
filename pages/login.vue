<template>
  <div class="container">
    <div class="row justify-content-center">
      <h3 class="col-12 page-info-title">Iniciar sesión</h3>
    </div>
    <div class="login-box col-12 offset-xl-3 col-xl-6 offset-lg-2 col-lg-8">
      <div class="row">
        <label for="username" class="col-lg-3 offset-lg-1  offset-1 col-12">Usuario:</label>
        <input type="text" id="username" class="col-lg-6 form-control offset-lg-0 offset-1 col-10" />
      </div>
      <div class="row">
        <label for="password" class="col-lg-3 offset-lg-1 offset-1 col-12">Contraseña:</label>
        <input type="password" id="password" class="col-lg-6 form-control offset-lg-0 offset-1 col-10" />
      </div>
      <div class="row">
        <button class="btn btn-light offset-2 col-8" v-on:click="login()">Iniciar sesión</button>
      </div>
      <hr class="registry-separator" />
      <div class="row">
        <div class="col-lg-6 col-12 offset-lg-3 align-center">
          <span>¿Eres nuevo cliente?</span>
        </div>
      </div>
      <div class="row">
        <NuxtLink to="/registry" class="offset-2 col-8">
          <button class="btn btn-primary col-12" >Crear cuenta</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$router.push('/');
    }
  }
}
</script>
<style class="css" scoped>
.login-box {
  border: 1px #ddd solid;
  border-radius: 4px;
  padding-left: -15px;
  padding-right: -15px;
  padding-top: 4%;
  padding-bottom: 2%;
}
.login-box .row {
  margin-bottom: 5%;
}
.align-center {
  text-align: center;
}
.registry-separator {
  margin-bottom: 5%;
}
@media screen and (max-width: 991px ) {
  span  {
    font-size: 2.0em!important;
  }
}
</style>