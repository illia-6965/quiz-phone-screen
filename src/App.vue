<template>
  <div class="container">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
// import MainPage from '@/components/MainPage'
import NavBar from '@/components/NavBar';


export default {
  components:{
    // MainPage,
    NavBar
  },
  data(){
    return{
     
    }
  }
}

</script>


<style lang="scss"  >

  .container{
  height: 100vh;
  display: flex;
  flex-direction: column;
 
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    appearance: none;
  }
  





</style>
