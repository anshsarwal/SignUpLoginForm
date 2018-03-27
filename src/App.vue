<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  import signlogin from './Components/signlogin'
  import forgotpassword from './Components/forgotpassword'
  import changepassword from './Components/changepassword'

  export default {
    components:{
      'app-signlogin': signlogin,
      'app-forgotpassword': forgotpassword,
      'app-changepassword': changepassword
    }   
  }
</script>

