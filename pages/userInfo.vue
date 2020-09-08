<template>
  <div class="container">
    <div class="row justify-content-center">
      <h3 class="col-md-4 user-info-title">Datos de usuario</h3>
    </div>
    <div class="form-container offset-md-2 col-md-8">
        <div class="row">
            <label for="name" class="col-md-2 offset-md-1 align-items-center">Nombre:</label>
            <input type="text" placeholder="nombre..." id="name" class="col-md-5"  v-model='name' v-bind:disabled="disabledName"/>
            <button class="btn btn-light offset-1 col-md-2" v-on:click="disabledName = false" v-if="disabledName"  > Editar campo </button>
            <button class="btn btn-light offset-1 col-md-2" v-on:click="disabledName = true" v-if="!disabledName" > Guardar </button>
        </div>
        <div class="row">
            <label for="email" class="col-md-2 offset-md-1">Email:</label>
            <input type="text" placeholder="Email..." id="email" class="col-md-5" v-model='email' v-bind:disabled="disabledEmail"/>
            <button class="btn btn-light offset-1 col-md-2" v-on:click="disabledEmail = false" v-if="disabledEmail" > Editar campo </button>
            <button class="btn btn-light offset-1 col-md-2" v-on:click="disabledEmail = true" v-if="!disabledEmail"> Guardar </button>
        </div>
         <div class="row">
            <label for="phone" class="col-md-2 offset-md-1">Teléfono:</label>
            <input type="text" placeholder="Teléfono..." id="phone" class="col-md-5" v-model='phone' v-bind:disabled="disabledPhone"/>
            <button class="btn btn-light offset-1 col-md-2" v-on:click="disabledPhone = false" v-if="disabledPhone"> Editar campo </button>
            <button class="btn btn-light offset-1 col-md-2" v-on:click="disabledPhone = true" v-if="!disabledPhone"> Guardar </button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"userInfo",
    data() {
        return {      

            name: "Jason Danilo Franco Quintero",
            email: "jada183.jf@gmail.com",
            phone: '',
            disabledName: true,
            disabledEmail: true,
            disabledPhone: true
           
        }
    }
}
</script>
<style lang="css">
    .user-info-title {
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
    .form-container .row{
        margin-bottom: 5%;
    }
    input:disabled{
        border: none;
        color: black;
        background-color: white !important;
    }
</style>