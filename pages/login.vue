<template>
  <div class="container">
    <div class="row justify-content-center">
      <h3 class="col-md-4 page-info-title">Iniciar sesion</h3>
    </div>
    <div class="login-box col-12 offset-lg-3 col-lg-6">
      <div class="row">
        <label for="username" class="col-lg-3 offset-lg-1">Usuario:</label>
        <input type="text" id="username" class="col-lg-6 form-control" />
      </div>
      <div class="row">
        <label for="password" class="col-lg-3 offset-lg-1">Contraseña:</label>
        <input type="password" id="password" class="col-lg-6 form-control" />
      </div>
      <div class="row">
        <button class="btn btn-light col offset-lg-7 col-lg-3">Iniciar sesión</button>
      </div>
      <hr class="registry-separator" />
      <div class="row">
        <div class="col-6 offset-3 align-center">
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
<style>
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
</style>