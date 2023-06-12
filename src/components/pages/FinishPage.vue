<template>

    <div class="wrapper-loading"
          v-if="delay" >
            <h3>Обработка результатов</h3>
            <font-awesome-icon icon="fa-solid fa-spinner" class="spinner"/>
            <!-- <spinner/> -->
            <p class="wrapper-finish-page__inf">Определение стиля мышления.......</p>
    </div>


  <div class="wrapper-finish-page"
        v-else
  >
    <div class="header">
        <h3>Ваш результат рассчитан:</h3>
        <p>
            Kоличество ваших правильных ответов - {{ showResult }} 
        </p>
    </div>
    <div class="main-inf">
        <h3>Скорее получите свой результат!</h3>
        <p>
            В целях защиты персональных 
            данных результат теста, их подробная 
            интерпретация и рекомендации доступны 
            в виде голосового сообщения по звонку 
            с вашего мобильного телефона
        </p>
    </div>
    <div class="clock">Звоните скорее, запись доступна всего <span>{{timer.minutes}} : {{ timer.seconds}}</span> минут</div>
    <div class="footer-call-btn" v-show="callButton" @click="showRequest = true">
        <p>позвонить и прослушать результат</p>
    </div>
    <div v-if="showRequest" class="aaa">{{ request }}</div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions, mapState} from 'vuex'
export default {
   components:{

   },
   data(){
    return{
        delay: true,
        timer: {
            minutes: 10,
            seconds: '03'
        },
        callButton: true,
        stopTimer: null,
        showRequest: false
    }
   },
   watch:{
    delay(){
       this.$emit('hideIndicator', false)
    }
   },
   computed:{
    ...mapGetters(['showResult']),
    ...mapState(['request'])
   },
   methods:{
    ...mapActions(['getRequest']),
    ...mapMutations(['showExtraImagesNavBar']),

    delayFunc(){ 
        setTimeout(() => this.delay = false, 3000)
    },
    countDown(){
        this.stopTimer = setInterval(this.subtractingSeconds, 1000)
       
    },
    subtractingSeconds(){
        if(this.timer.minutes === 0 && this.timer.seconds === '00'){
            clearInterval(this.stopTimer)
            this.callButton = false
        }else{
            if(this.timer.seconds === '00'){
                this.timer.seconds = '59'
                this.timer.minutes--
            }else{
                if(this.timer.seconds >= 0 && this.timer.seconds <= 10){
                    this.timer.seconds = `0${this.timer.seconds - 1}`
                }else{
                    this.timer.seconds--
                }  
            }
        }     
    },
   },
   created(){
    this.getRequest()
   },
    mounted(){
        this.delayFunc()
        this.countDown()
        this.showExtraImagesNavBar('finishText')
    }
}
</script>

<style lang="scss" scoped>
@keyframes rotation {
  0% {
    transform: rotate(0);
  } 100% {
    transform: rotate(360deg);
  }
}
.wrapper-loading{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    .spinner{
        width: 70px;
        height: 70px;
        color: #3BDE7C;
        animation: rotation 2s cubic-bezier(0.4, 0, 1, 1) infinite ;
        margin-bottom: 40px;
    }
    h3{
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-bottom: 40px;

    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #FFFFFF;
    }

}
.wrapper-finish-page{
    height: 100%;
    padding: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    background: black;
    .header{
        color: #FFFFFF;
        font-style: normal;
        

        h3{
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            text-transform: uppercase;
            margin-bottom: 10px;
        }
        p{
            font-weight: 400;
            font-size: 20px;
            line-height: 18px;
            text-decoration-line: underline;
        }
        
    }
    .main-inf{
        h3{
            font-family: 'PT Serif';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #3BDE7C;
            margin-bottom: 10px;
        }
        p{
            background: #1C2741;
            border-radius: 6px;
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 8px;
            line-height: 14px;
            letter-spacing: 2px;
        }
    }
    .clock{
        color: #3BDE7C;
        font-size: 11px;
        line-height: 30px;
        span{
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
        }
    }
    .footer-call-btn{
        border-radius: 5px;
        background: #EB1B00;
        padding: 20px 20px 20px 55px;
        position: relative;
        margin-bottom: 10px;
        p{
            font-weight: 900;
            font-size: 15px;
            line-height: 18px;
            text-transform: capitalize;
            color: #FFFFFF;
            
        }
    }
    .footer-call-btn::after{
        content: '';
        background: center / cover no-repeat url('@/assets/phone_2.png');
        width: 30px;
        height: 30px;
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
    }
   
}
.aaa{
    color: #FFFFFF;
}
</style>