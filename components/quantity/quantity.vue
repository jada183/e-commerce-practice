<template>
  <div class="row">
    <button class="btn btn-light col-3" v-on:click="rest()">-</button>
    <input
      type="text"
      class="form-control col-4"
      v-model="quantityData"
      v-focus
      v-on:blur="adjustValue()"
      @change="adjustValue()"
    />
    <button class="btn btn-light col-3" v-on:click="sum()">+</button>
  </div>
</template>
<script>
export default {
  name: "quantity",
  data() {
    return {
      quantityData: this.quantity
    };
  },
  props: {
    quantity: {
      type: Number,
      required: true
    }
  },
  methods: {
    sum() {
      this.quantityData++;
    },
    rest() {
      if (this.quantityData > 1) {
        this.quantityData--;
      }
    },
    adjustValue() {
      this.quantityData = this.quantityData.toString().replace(/[^0-9]*/g, "");
      if (this.quantityData === "" || this.quantityData === "0") {
        this.quantityData = 1;
      }
    }
  },
  computed: {},
  directives: {
    focus: {
      update: function(el) {
        el.value = el.value.replace(/[^0-9]*/g, "");
      }
    }
  }
};
</script>