<template>
  <button class="btn" :class="{'btn-active': activeButton}">
    <slot></slot>
  </button>
        
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  props:{
    activeButton:{
      type: Boolean,
      default(){
        return false
      }
    }
  },
  methods:{
 
  }
}
</script>

<style lang="scss" scoped>

.btn{
    width: 190px;
    height: 40px;
    background-color: #DADADA;
    border-radius: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #0D0C11;
}
.btn-active{
  background-color: #FFC700;
}
</style>