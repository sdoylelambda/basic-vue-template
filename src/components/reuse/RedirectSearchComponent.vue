<template>
  <h1>Redirect...</h1>
</template>

<script>
export default {
  name: "RedirectSearchComponent",
  data() {
    return {
      searchTerm: null,
    };
  },
  mounted() {
    this.searchTerm = this.$route.params.searchTerm;
    this.$router.push("/search/" + this.searchTerm);
  },
};
</script>

<style>
</style>