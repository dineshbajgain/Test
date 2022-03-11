<template>
    <nav v-if="isAuthenticated" class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Dashboard</a>
      <div class="d-flex">
        <button class="btn btn-secondary" @click="logoutFromDevice">Logout</button>
      </div>
      </div>
    </nav>
  <div class="d-flex justify-content-center">
      <router-view />
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
computed: {
  ...mapGetters([
      'isAuthenticated'
    ])
  },
  methods:{
    ...mapActions(["LogOut"]),
    async logoutFromDevice(){
      await this.LogOut();
      this.$router.push('/login')

    }
  }
}
</script>

<style>

</style>