<template>
  <div class="center">
    
    <section id="content">
      <h2 class="subheader">404 Page Not Found</h2>
    </section>

    <SidebarComponent />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import SidebarComponent from '../reuse/SidebarComponent.vue';

export default {
  name: "ErrorComponent",
  components: {
    SidebarComponent
  }
};
</script>

<style>
</style>