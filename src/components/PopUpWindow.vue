<template>
  <div class="wrapper-pup-up-window" :class="{'openPopUpWindow': openPopUpWindow}">
    <div class="wrapper-btn">
        <button class="wrapper-btn__btn-close"
                @click="closePopUpWindow"        
        ></button>
    </div>
   
    <a class="wrapper-pup-up-window__text-inf" @click="goHome">главная</a>
    <a class="wrapper-pup-up-window__text-inf">информация о тесте</a>
    <a class="wrapper-pup-up-window__text-inf">пройти тест</a>
   
  </div>
</template>

<script>
export default {
    props:{
        openPopUpWindow:{
            type: Boolean,
            default(){
                return false
            }
        }
    },
    methods:{
        closePopUpWindow(){
            this.$emit('closePopUpWindow', false)
        },
        goHome(){
            this.closePopUpWindow()
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
div .openPopUpWindow{
        right: 0;
        z-index: 10;  
    }
.wrapper-pup-up-window{
    width: 100vw;
    height: 100vh;
    background-color: black;
    padding: 23px;  
    position: absolute;
    right: 100%;
    top: 0; 
    transition: right 0.5s;
    
        &__text-inf{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 22px;
            text-transform: uppercase;
            color: #FFFFFF;
            margin: 0px 0 27px 0;
            display: block;
        }
}
.wrapper-btn{
    display: flex;
    justify-content: end;
    align-items: center;
    height: 30px;
    margin-bottom: 65px;
        &__btn-close{
            width: 40px;
            height: 5px;
            background-color: #FFC700;
            transform: rotate(45deg);
            position: relative;
            
        }
        &__btn-close::after{
            content: '';
            width: 40px;
            height: 5px;
            background-color: #FFC700;
            transform: rotate(90deg);
            position: absolute;
            left: 0;
            top: 0;
        }
}
</style>