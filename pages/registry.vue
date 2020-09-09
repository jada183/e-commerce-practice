<template>
  <div class="container">
    <div class="row justify-content-center">
      <h3 class="col-md-4 page-info-title">Crear cuenta</h3>
    </div>
    <div class="form-container col-12 offset-xl-3 col-xl-6 offset-lg-2 col-lg-8">
      <div class="row">
        <h5 class="offset-md-2">Datos generales</h5>
      </div>
      <div class="row">
        <input
          type="text"
          placeholder="* Nombre"
          id="name"
          class="col-md-8 offset-md-2 form-control"
          v-model="name"
        />
      </div>
      <div class="row">
        <input
          type="email"
          placeholder="* Email"
          id="email"
          class="col-md-8 offset-md-2 form-control"
          v-model="email"
        />
      </div>
      <div class="row">
        <input
          type="text"
          placeholder="Teléfono"
          id="phone"
          class="col-md-8 offset-md-2 form-control"
          v-model="phone"
        />
      </div>

      <div class="row">
        <h5 class="offset-md-2">Contraseña</h5>
      </div>
      <div class="row">
        <input
          type="password"
          placeholder="* Contraseña"
          id="password"
          class="col-md-8 offset-md-2 form-control"
          v-model="password"
        />
      </div>
      <div class="row">
        <input
          type="password"
          placeholder="* Repetir Contraseña"
          id="repeatPassword"
          class="col-md-8 offset-md-2 form-control"
          v-model="repeatPassword"
        />
      </div>
      <div class="row">
        <button class="btn btn-primary col-md-8 offset-2" v-on:click="createAcount()">Crear cuenta</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "registry",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      phone: ""
    };
  },
  methods: {
    createAcount() {
      /// TODO add logic
       this.$router.push('/')
    }
  }
};
</script>
<style lang="css">
.form-container {
  border: 1px #ddd solid;
  border-radius: 4px;
  padding-left: -15px;
  padding-right: -15px;
  padding-top: 5%;
  padding-bottom: 5%;
}
.form-container .row {
  margin-bottom: 5%;
}
</style>