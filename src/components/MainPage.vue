<template>
  <div class="main-wrapper-face-page">
    <div class="wrapper-information-part">
      <h2 class="header-pass-test">Пройдите точный и быстрый</h2>
      <h1 class="header-main-topic">тест на <br> определение <br> iq</h1>
    </div>

    <div class="wrapper-responsive-part">
      <btn-pass-test 
          @click="$router.push('/passTest')"
          :activeButton="true"
      >пройти тест</btn-pass-test>
      <div class="wrapper-inf-main-page">
        <p class="text-inf-main-page get-rec">И получите рекомендации по развитию своего интеллекта и</p>
        <p class="text-inf-main-page improve-fin">улучшению финансового благосостояния и личной жизни</p>
      </div>
      <div class="wrapper-btn-show-more">
        <button class="btn-show-more"></button>
        <p class="more-inf">Подробнее</p>
      </div>
    </div>
  </div>
</template>

<script>

import BtnPassTest from '@/components/BtnPassTest';
import { mapMutations } from 'vuex';
export default {
  components:{
    BtnPassTest
  },
  methods:{
    ...mapMutations(['showExtraImagesNavBar'])
  },
  created(){
    this.showExtraImagesNavBar(false)
  }
}
</script>

<style lang="scss" scoped>
.main-wrapper-face-page{
  width: 100vw;
  height: 100%;
  background: center / cover no-repeat url('@/assets/rain_bk_1.png');
  padding: 27px 20px 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-style: normal;
  text-align: center;
}
.wrapper-information-part{
  text-transform: uppercase;
  font-weight: 400;
  .header-pass-test{
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin-bottom: 15px;
  }
  .header-main-topic{
    font-size: 30px;
    line-height: 33px;
    letter-spacing: 0.03em;
    color: #FFC700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 
  }
}
.wrapper-responsive-part{
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper-inf-main-page{
    margin-top: 22px;
    .text-inf-main-page {
      font-family: 'PT Serif';
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 19px;
      letter-spacing: 0.05em;
    }
    .get-rec{
      color: #FFC700;
    }
    .improve-fin{
      color: #FFFFFF;
    }
  }

  .wrapper-btn-show-more{
    margin-top: 16px; 
        .btn-show-more{
            width: 16px;
            height: 16px;
            background-color: #FFFFFF;
            border-radius: 50%; 
            border: none;
            position: relative;
        }
        .btn-show-more::after{
          content: '';
          background:center / cover no-repeat url('../assets/arrow_up.png');
          width: 16px;
          height: 16px;
          position: absolute;
          left: 0;
          top: 0;
        }
      
        .more-inf{
          font-style: normal;
          font-weight: 400;
          font-size: 8px;
          line-height: 11px;
          letter-spacing: 0.05em;
          color: #FFFFFF;
        }

  }
}






</style>