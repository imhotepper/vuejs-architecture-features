<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      The users:  {{users}}
    </div>
    
  </div>
</template>

<script>
import {getUsers} from './services'

export default {
  name: 'About',
  data(){return {users:[]}},
  async created(){
    //let users = await this.axios.get('/api/users')
    let users = await getUsers();
    console.log("users: " ,users)
    this.users = users;
  }
}
</script>
