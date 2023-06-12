<template>
    <div class="wrapper-pages-with-questions">
        <indicator 
            v-if="hideIndicator"
            class="indicator"
            :numberOfStep="questionsIQ.length"
            :currentStep="currentTest + 1"
        />
        <one-page
            v-if="questionsIQ.length != currentTest + 1"
            :testData="questionsIQ[currentTest]"
            @highlightBtn="lightBtnGetAnswer"
        />
        <btn-pass-test
            v-if="questionsIQ.length != currentTest + 1"
            @click="NextTest"   
            :activeButton="highlightBtn" 
        >далее</btn-pass-test>
        <finish-page 
            v-if="questionsIQ.length === currentTest + 1"
            @hideIndicator="(data) => hideIndicator = data"
        />
    </div>
   
   
</template>

<script>
import FinishPage from '@/components/pages/FinishPage'
import Indicator from '@/components/pages/Indicator'
import BtnPassTest from '@/components/BtnPassTest'
import OnePage from '@/components/pages/OnePage'
import { mapMutations } from 'vuex'
export default {
  components: { 
    OnePage,
    BtnPassTest,
    Indicator,
    FinishPage
 },
    data(){
        return{
            selectedAnswer: null,
            hideIndicator: true,
            highlightBtn: false,
            currentTest: 0,
            questionsIQ:[
                {
                    id: 1,
                    title: "Ваш пол:",
                    type: "numeric",
                    questions: [
                        {
                            item: "Мужчина",
                            correct: 0, 
                            id: 1.1

                        },
                        {
                            item: "Женщина",
                            correct: 0,   
                            id: 1.2               
                        },
                    ]
                },
                {
                    id: 2,
                    title: "Укажите ваш возраст:",
                    type: "numeric",
                    questions:[
                        {
                            item: "До 18",
                            correct: 0,    
                            id: 2.1              
                        },
                        {
                            item: "От 18 до 28",
                            correct: 0,   
                            id: 2.2             
                        },
                        {
                            item: "От 29 до 35",
                            correct: 0,     
                            id: 2.3                    
                        },
                        {
                            item: "От 36" ,
                            correct: 0,     
                            id: 2.4                   
                        },
                    ]
                },
                {
                    id: 3,
                    title: "Выберите лишнее:",
                    type: "numeric",
                    questions:[
                        {
                            item:  "Дом" ,
                            correct: 0,    
                            id: 3.1                    
                        },
                        {
                            item: "Шалаш" ,
                            correct: 0.5,   
                            id: 3.2                         
                        },
                        {
                            item: "Бунгало" ,
                            correct: 0,      
                            id: 3.3                     
                        },
                        {
                            item: "Скамейка" ,
                            correct: 1,    
                            id: 3.4                
                        },
                        {
                            item: "Хижина" ,
                            correct: 0,
                            id: 3.5
                        },
                        
                    ]

                },
                {
                    id: 4,
                    title: "Продолжите числовой ряд: 18 20 24 32",
                    type: "numeric",
                    questions:[
                        {
                            item:  "68" ,
                            correct: 0,   
                            id: 4.1                     
                        },
                        {
                            item: "48" ,
                            correct: 1,      
                            id: 4.2                      
                        },
                        {
                            item: "74" ,
                            correct: 0,   
                            id: 4.3                        
                        },
                        {
                            item: "57" ,
                            correct: 0,      
                            id: 4.4               
                        },
                        {
                            item: "60" ,
                            correct: 0.5,
                            id: 4.5
                        },
                        {
                            item: "77" ,
                            correct: 0,
                            id: 4.6
                        },
                        
                    ]

                },
                {
                    id: 5,
                    title: "Выберите цвет, который сейчас наиболее Вам приятен:",
                    type: "colors",
                    questions:[
                        {
                            item:  "grey" ,
                            correct: 0,   
                            id: 5.1                     
                        },
                        {
                            item: "blue" ,
                            correct: 0,      
                            id: 5.2                      
                        },
                        {
                            item: "green" ,
                            correct: 0,   
                            id: 5.3                        
                        },
                        {
                            item: "red" ,
                            correct: 1,      
                            id: 5.4               
                        },
                        {
                            item: "yellow" ,
                            correct: 0,
                            id: 5.5
                        },
                        {
                            item: "brown" ,
                            correct: 0.5,
                            id: 5.6
                        },
                        {
                            item: "black" ,
                            correct: 0,
                            id: 5.7
                        },
                        {
                            item: "violet" ,
                            correct: 0,
                            id: 5.8
                        },
                        {
                            item: "cyan" ,
                            correct: 0,
                            id: 5.9
                        },
                        
                    ]

                },
                {
                    id: 6,
                    title: "Выберите правильную фигуру из четырёх пронумерованных:",
                    type: "figure",
                    image: "image_for_figure.png",
                    questions:[
                        {
                            item:  "1" ,
                            correct: 0,   
                            id: 6.1                     
                        },
                        {
                            item: "2" ,
                            correct: 0.5,      
                            id: 6.2                      
                        },
                        {
                            item: "3" ,
                            correct: 0,   
                            id: 6.3                        
                        },
                        {
                            item: "4" ,
                            correct: 1,      
                            id: 6.4               
                        },        
                    ]

                },
                {
                    id: 7,
                    title: "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",
                    type: "figureAndText",
                    image: "image_for_mix_test.png",
                    questions:[
                        {
                            item:  "Оно остроконечное" ,
                            correct: 0,   
                            id: 7.1                     
                        },
                        {
                            item: "Оно устойчиво" ,
                            correct: 1,      
                            id: 7.2                      
                        },
                        {
                            item: "Оно находиться в состоянии равновесия" ,
                            correct: 0.5,   
                            id: 7.3                        
                        },       
                    ]

                },
                {
                    id: 8,
                    title: "Вставьте подходящее число:",
                    type: "figure",
                    image: "star.png",
                    questions:[
                        {
                            item:  "34" ,
                            correct: 0,   
                            id: 8.1                     
                        },
                        {
                            item: "36" ,
                            correct: 0,      
                            id: 8.2                      
                        },
                        {
                            item: "53" ,
                            correct: 0,   
                            id: 8.3                        
                        },
                        {
                            item: "44" ,
                            correct: 1,      
                            id: 8.4               
                        },  
                        {
                            item: "66" ,
                            correct: 0,      
                            id: 8.5               
                        }, 
                        {
                            item: "42" ,
                            correct: 0.5,      
                            id: 8.6               
                        },       
                    ]

                },   
            ],
        }
    },
    computed:{

    },
    methods:{
       ...mapMutations(['showExtraImagesNavBar', 'addAnswer']),
       
        lightBtnGetAnswer({highlightBtn, selectedAnswer}){
            this.highlightBtn = highlightBtn
            this.selectedAnswer = selectedAnswer
        },
        NextTest(){
            if(this.highlightBtn){
                this.addAnswer(this.selectedAnswer)
                this.currentTest++
                this.highlightBtn = false
            }
        },
       createId(){
        let timer = 1
            this.questionsIQ.forEach((element) => {
                element.questions.forEach((item) => {
                    timer++
                    setTimeout(() => item.id = Date.now(), timer * 100)
                }) 
            })
        },
    },
     created(){
            this.showExtraImagesNavBar(true)
        },
}

</script>

<style lang="scss" scoped>
.wrapper-pages-with-questions{
    background-color: black;
    height: 100%;
    padding: 40px 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    // background: url('@/assets/image_for_mix_test.png');
}

</style>