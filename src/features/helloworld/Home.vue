<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <h2>{{counter}}</h2>
    <div>{{users}}</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/features/helloworld/HelloWorld.vue'


//without modules
import {mapState, mapActions} from 'vuex'


//with modules
// import { createNamespacedHelpers  } from 'vuex'
// const { mapState, mapActions } = createNamespacedHelpers('usersModule')


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed:{
    ...mapState(['counter']),
    ...mapState('usersModule',['users']) // with module
  //  ...mapState(['users']) // without module
  },
methods:{
  ...mapActions('usersModule',['loadUsers']) //with module
  // ...mapActions(['loadUsers']) //without module
},
    async created(){
      this.loadUsers();
  }
}
</script>
