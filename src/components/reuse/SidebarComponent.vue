<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Puedes hacer esto</h3>
      <a href="#" class="btn btn-success">Crear artículo</a>
    </div>

    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el artículo que buscas</p>
      <form v-on:submit.prevent="search">
        <input type="text" name="search" v-model="searchTerm" />
        <input type="submit" name="submit" value="Buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      searchTerm: null
    }
  },
  methods: {
    search() {
      this.$router.push('/redirect/' + this.searchTerm);
    }
  }
};
</script>

<style>
</style>