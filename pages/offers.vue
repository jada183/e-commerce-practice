<template>
  <div>
    <h5>Ofertas</h5>
  </div>
</template>
<script>
export default {
  name: "offers",
  data() {
    return {
      type: this.$route.query.type
    };
  },
  methods: {
    showQueryParam() {
      this.type = this.$route.query.type;
    }
  },
  created() {
  },
  watch: {
    '$route': 'showQueryParam'
  }
};
</script>