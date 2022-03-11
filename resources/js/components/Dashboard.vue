<template>
<div>
  <h1 class="text-white p-4">Profile</h1>
  <div class="card" style="width: 18rem;">
  <img src="https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-2801.jpg?w=740" class="card-img-top" alt=""/>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name : {{user.name}}</li>
      <li class="list-group-item">Email :  {{user.email}}</li>
  </ul>
  </div>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      user:{}
    }
  },
  mounted(){
    axios.get('user').then((response)=>{
      this.user = response.data
    })
  }
}
</script>

<style>

</style>