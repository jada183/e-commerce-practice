<template>
  <div class="container">
    <div class="row justify-content-center">
      <h3 class="col-lg-4  col-12 page-info-title">Crear cuenta</h3>
    </div>
    <div class="form-container col-12 offset-lg-3 col-lg-6 ">
      <div class="row">
        <h5 class="offset-lg-2  col-10 offset-1">Datos generales</h5>
      </div>
      <div class="row">
        <input
          type="text"
          placeholder="* Nombre"
          id="name"
          class="col-lg-8 offset-lg-2 col-10 offset-1 form-control"
          v-model="name"
        />
      </div>
      <div class="row">
        <input
          type="email"
          placeholder="* Email"
          id="email"
          class="col-lg-8 offset-lg-2 col-10 offset-1 form-control"
          v-model="email"
        />
      </div>
      <div class="row">
        <input
          type="text"
          placeholder="Teléfono"
          id="phone"
          class="col-lg-8 offset-lg-2 col-10 offset-1 form-control"
          v-model="phone"
        />
      </div>

      <div class="row">
        <h5 class="offset-lg-2  offset-1">Contraseña</h5>
      </div>
      <div class="row">
        <input
          type="password"
          placeholder="* Contraseña"
          id="password"
          class="col-lg-8 offset-lg-2 col-10 offset-1 form-control"
          v-model="password"
        />
      </div>
      <div class="row">
        <input
          type="password"
          placeholder="* Repetir Contraseña"
          id="repeatPassword"
          class="col-lg-8 offset-lg-2 col-10 offset-1 form-control"
          v-model="repeatPassword"
        />
      </div>
      <div class="row">
        <button class="btn btn-primary col-lg-8 offset-lg-2 col-10 offset-1" v-on:click="createAcount()">Crear cuenta</button>
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