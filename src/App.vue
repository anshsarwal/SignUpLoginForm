<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  import signlogin from './Components/signlogin'
  import forgotpassword from './Components/forgotpassword'

  export default {
    components:{
      'app-signlogin': signlogin,
      'app-forgotpassword': forgotpassword,
    }   
  }
</script>

<style>
#app{
  margin-top: 100px;
  font-family: 'Open Sans', arial, Verdana, Tahoma, sans-serif;
}
</style>

