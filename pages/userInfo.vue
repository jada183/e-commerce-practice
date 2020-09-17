<template>
  <div class="container">
    <div class="row justify-content-center">
      <h3 class="col-12 page-info-title">Datos de usuario</h3>
    </div>
    <div class="form-container col-12  offset-lg-2 col-lg-8 ">
      <div class="row">
        <label for="name" class="col-lg-2 offset-lg-1  col-12 offset-0">Nombre:</label>
        <input
          type="text"
          placeholder="nombre..."
          id="name"
          class="col-lg-5 col-8 form-control"
          v-model="name"
          v-bind:disabled="disabledName"
        />
        <button
          class="btn btn-light offset-lg-1 col-lg-2 col-4"
          v-on:click="disabledName = false"
          v-if="disabledName"
        >Editar</button>
        <button
          class="btn btn-light offset-lg-1 col-lg-2 col-4"
          v-on:click="disabledName = true"
          v-if="!disabledName"
        >Guardar</button>
      </div>
      <div class="row">
        <label for="email" class="col-lg-2 offset-lg-1 col-12 offset-0">Email:</label>
        <input
          type="text"
          placeholder="Email..."
          id="email"
          class="col-lg-5 col-8 form-control"
          v-model="email"
          v-bind:disabled="disabledEmail"
        />
        <button
          class="btn btn-light offset-lg-1 col-lg-2 col-4"
          v-on:click="disabledEmail = false"
          v-if="disabledEmail"
        >Editar</button>
        <button
          class="btn btn-light offset-lg-1 col-lg-2 col-4"
          v-on:click="disabledEmail = true"
          v-if="!disabledEmail"
        >Guardar</button>
      </div>
      <div class="row">
        <label for="phone" class="col-lg-2 offset-lg-1 col-12 offset-0">Teléfono:</label>
        <input
          type="text"
          placeholder="Teléfono..."
          id="phone"
          class="col-lg-5 col-8 form-control"
          v-model="phone"
          v-bind:disabled="disabledPhone"
        />
        <button
          class="btn btn-light offset-lg-1 col-lg-2 col-4"
          v-on:click="disabledPhone = false"
          v-if="disabledPhone"
        >Editar</button>
        <button
          class="btn btn-light offset-lg-1 col-lg-2 col-4"
          v-on:click="disabledPhone = true"
          v-if="!disabledPhone"
        >Guardar</button>
      </div>
      <div class="row" v-if="!changePassword">
        <label for="password" class="col-lg-2 offset-lg-1 col-12 offset-0">Contraseña:</label>
        <input
          type="password"
          placeholder="contraseña...."
          id="password"
          class="col-lg-5 col-8 form-control"
          v-model="password"
          v-bind:disabled="true"
        />
        <button
          class="btn btn-light offset-lg-1 col-lg-2 col-4"
          v-on:click="changePassword = true"
        >Editar</button>
      </div>
      <div class="row" v-if="changePassword">
        <label for="newPassword" class="col-lg-2 offset-lg-1 col-12 offset-0">Nueva contraseña:</label>
        <input
          type="password"
          placeholder="contraseña...."
          id="newPassword"
          class="col-lg-5 col-8 form-control"
          v-model="newPassword"
        />
        <button class="btn btn-light offset-lg-1 col-lg-2 col-4" v-on:click="cancelChangePassword()" tabindex="-1">Cancelar</button>
      </div>
      <div class="row" v-if="changePassword">
        <label for="repeatedNewPassword" class="col-lg-2 offset-lg-1 col-12 offset-0">Repita contraseña:</label>
        <input
          type="password"
          placeholder="contraseña...."
          id="repeatedNewPassword"
          class="col-lg-5 col-8 form-control"
          v-model="repeatedNewPassword"
        />
        <button class="btn btn-light offset-lg-1 col-lg-2 col-4" v-on:click="changePasswordEvent()">Guardar</button>
      </div>
      <div class="row" v-if="passwordError">
        <span class="error-text offset-md-1 col-md-11">- {{ passwordError }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "userInfo",
  data() {
    return {
      name: "Jason Danilo Franco Quintero",
      email: "jada183.jf@gmail.com",
      phone: "",
      password: "123456",
      newPassword: "",
      repeatedNewPassword: "",
      disabledName: true,
      disabledEmail: true,
      disabledPhone: true,
      changePassword: false,
      passwordError: ""
    };
  },
  methods: {
    changePasswordEvent() {
      if (this.newPassword.length < 6) {
        this.passwordError =
          "No se puede guardar contraseñas con menos de 6 carácteres";
      } else if (this.newPassword === this.repeatedNewPassword) {
        this.changePassword = false;
        this.passwordError = "";
        this.password = this.newPassword;
        this.cleanChangePasswordFields();
      } else {
        this.passwordError = 'Las contraseñas no coinciden';
        
      }
    },
    cancelChangePassword() {
        this.cleanChangePasswordFields();
        this.passwordError = "";
        this.changePassword = false;
    },
    cleanChangePasswordFields() {
        this.newPassword = "";
        this.repeatedNewPassword = "";
    }
  }
};
</script>
<style lang="css">
.page-info-title {
  text-align: center;
}
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
input:disabled {
  border: none;
  color: black;
  background-color: white !important;
}
button {
    height: auto;
}
</style>