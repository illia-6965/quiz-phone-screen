<template>
  <div class="wrapper-indicator">
    <div class="indicator" :style="{width: 100 / (numberOfStep) * currentStep + '%'}"></div>
  </div>
</template>

<script>
export default {
    props:{
        numberOfStep:{
          type: Number,
          default(){
            return 
          }
        },
        currentStep:{
          type: Number,
        }
    },
    data(){
      return{
     
      }
    },
    methods:{
       
    }
}
</script>

<style lang="scss" scoped>
.wrapper-indicator{
  width: 100%;
  height: 11px;
  border-radius: 10.5px;
  background-color: #F2F3F3;
  .indicator{
    background-color: #3BDE7C;
    border-radius: 10.5px;
    height: 100%;
  }
}
</style>