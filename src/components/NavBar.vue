<template>
   <div class="wrapper-navbar">
        <button 
            class="btn"
            @click="openFPopUpWindow"
        ></button>
     
        <div v-if="showExtraImagesNavBar && showExtraImagesNavBar != 'finishText'" class="picture-brain"></div>
        <h1 
            v-if="showExtraImagesNavBar" 
            class="header-navbar" 
            :class="{'finishText': showExtraImagesNavBar === 'finishText'}"

        >{{ changeHeaderText }}</h1>
   </div>
   <pop-up-window
        :openPopUpWindow="openPopUpWindow"    
        @closePopUpWindow="(close) => openPopUpWindow = close"
    />
</template>

<script>
import PopUpWindow from '@/components/PopUpWindow';
import { mapGetters } from 'vuex';


export default {
    components:{
        PopUpWindow,
      
    },
    computed:{
        ...mapGetters(['showExtraImagesNavBar']),
        changeHeaderText(){
            if(this.showExtraImagesNavBar === true){
                return 'тест на определение IQ'
            }
            if(this.showExtraImagesNavBar === 'finishText'){
                return 'Готово!!!'
            }
        }
    },
    data(){
        return{
            openPopUpWindow: false
        }
    },

    methods:{
        openFPopUpWindow(){
            this.openPopUpWindow = true
        }
    }
}
</script>

<style lang="scss" scoped>

.wrapper-navbar{
    position: relative;
    width: 100vw;
    background-color:#181818;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    .picture-brain{
        width: 48px;
        height: 48px;
        background:center / cover no-repeat url('@/assets/brain.png');  
    }
    .header-navbar{
        height: 17px;
        color: #FFC700;
        font-size: 17px;
        font-weight: 400;
        line-height: 13.87px;
        text-transform: uppercase;
    }
    .finishText{
        font-size: 25px;
        margin: 0 auto;
    }
}
.btn{
    width: 24px;
    height: 2.67px;
    background-color: #DADADA;
    border: none;
    position: relative;}
.btn::after, .btn::before{
    content: '';
    width: 24px;
    height: 2.67px;
    background-color: #DADADA;
    position: absolute;
}
.btn::after{
    left: 0;
    top: calc(100% + 4px);
}
.btn::before{
    left: 0;
    bottom: calc(100% + 4px);
}
    
</style>