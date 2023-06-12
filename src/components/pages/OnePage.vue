<template>
    <div class="wrapper-page">
        <p class="question-title" :class="testData.type === typeTestColors && 'question-title-color-type'">{{ testData.title }}</p>

        <div    
            class="wrapper-img-type-figure" 
            v-if="testData.type === testTypeFigure || testData.type === testTypeFigureAndText">
                <img :src="require(`@/assets/${testData.image}`)" alt=""/>
        </div>

        <div
            v-if="testData.type != finishTest"  
            :class="{   
                'wrapper-set-questions-numeric': testData.type === typeTestNumeric,
                'wrapper-set-questions-colors': testData.type === typeTestColors,
                'wrapper-set-questions-figure': testData.type === testTypeFigure,
                'wrapper-set-questions-figure-and-text': enableClassForMixType,
            }"
        >   

                    <!-- <div class="wrapper-content-part-numeric"  v-for="test in testData.questions"
                        :key="test.id"  
                        @click="show">
                        <input 
                           
                          name="rrr"
                            type="radio" 
                            :id="test.id" 
                            :value="test.correct"
                            @change="sendAnswer"
                       
                        />
                        <label class="lbl" :for="test.id">
                            <span class="text-content">{{ test.item }}</span>
                        </label>
                        
                    </div> -->
                  
                    <label    
                        v-for="test in testData.questions"
                        class="wrapper-content-part"
                        :key="test.id" 
                        :for="test.id"
                        :style="{backgroundColor: test.item}"
                        :class="{
                            'active_label_numeric': test.item === selectedValue,
                        }"
                        @click="$emit('highlightBtn', {highlightBtn: true, selectedAnswer: test.correct})">
                        <input 
                            type="radio" 
                            class="circle"
                            :value="test.item" 
                            :id="test.id" 
                            v-model="selectedValue"
                            />
                        <span class="text-content" 
                              v-if="testData.type === typeTestNumeric || testData.type === testTypeFigure">
                              {{ test.item }}
                        </span>
                    </label>
                    <!-- <div class="wrapper-content-part-numeric"  v-for="test in testData.questions"
                        :key="test.id"  
                        @click="show">
                        <input 
                           
                            name="btn"
                            type="radio" 
                            :id="test.id" 
                            :value="test.correct"
                            @change="sendAnswer"
                            :ref="String(test.id)"
                        />
                        <label class="lbl" :for="test.id">
                            <span class="text-content">{{ test.item }}</span>
                        </label>
                        
                    </div> -->
           
        </div>  
    </div>
 
 
</template>

<script>

import BtnPassTest from '@/components/BtnPassTest'
import Spinner from '@/components/pages/Spinner'
export default {
    components:{
        BtnPassTest,
        Spinner,
    },
    data(){
        return{
            typeTestNumeric: "numeric",
            typeTestColors: 'colors',
            testTypeFigure: 'figure',
            testTypeFigureAndText: 'figureAndText',
            finishTest: 'finishTest',
            selectedValue: '',           
        }
    },
    computed:{
       enableClassForMixType(){
        if(this.testData.type === 'figureAndText'){   
            this.typeTestNumeric = 'figureAndText'
            return true
        }
       }
    },
    // watch:{
    //     testData(){
    //         if(this.testData.type === 'figureAndText'){
    //             this.typeTestNumeric = 'figureAndText'
    //         }
    //     }
    // },
    props:{
        testData:{
            type: Object,
            default(){
                return Object
            }
        },
    },
    methods:{
        selectActiveField(data){
            this.selectedFieldTest = data.selectedId
        },
        sendAnswer(event){
           this.$emit('update:modelValue', event.target.value) 
        },
        
        // show(){
        //     console.log('start')
        //     this.testData.questions.forEach(element => this.any(element));
        // },
        // any(element){
        //     console.log(this.$refs[element.id][0].checked, 'ref')
        // }  
    },
   
}
</script>

<style lang="scss" scoped>
@keyframes rolling {
  0% {
    transform: rotate(0deg);
  } 100% {
    transform: rotate(360deg);
  }
}
.wrapper-page{
    display: flex;
    justify-content: space-between ;
    flex-direction: column;
    
    .question-title{
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 26px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        margin-bottom: 38px;
        padding: 0 20px;
    }  
    .question-title-color-type{
        font-size: 19px;
        line-height: 23px;
        padding: 0;
    }
    .wrapper-img-type-figure{
        max-width: 228px;
        min-width: 173px;
        height: auto;
        margin: 0 auto 23px auto;
    }
}
// :style="{backgroundImage: `url(${require(`@/assets/${testData.image}`)})`}"
 .wrapper-set-questions-numeric{
    display: flex;
    flex-direction: column;
    max-height: 40vh;

    
    .wrapper-content-part{
        background-color: grey;
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 20px minmax(0px, 500px);
        grid-column-gap: 40px;
        // grid-template-columns: 200px 1fr 1fr;
        justify-content: start;
        align-content: center;
        padding: 0 35px;
        margin-bottom: 8px;
        width: 100vw;
        flex-basis: 50px;
        min-height: 40px;
        .text-content{  
            font-family: 'PT Serif';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: #FFFFFF;
        }
        .circle{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid #E5E5E5;
            background-color: #e5e5e500;
            align-self: center;
            // margin-right: 40px;
        }
    }
    .active_label_numeric{
        background-color: #FFC700;
        .circle{
            background-color: #2950C2;
            border: 2px solid #272727;   
        }
        .text-content{
            color: #272727;
        }
    }
}
.wrapper-set-questions-colors{
    display: grid;
    grid-template-columns: repeat(3, 75px);
    grid-template-rows: repeat(3, 75px);
    justify-content: center;
    align-content: center;
    grid-gap: 24px 21px;
    
    .wrapper-content-part{
    
    }
    .active_label_numeric{
        border: 6px solid #FFC700;
    }
}
.wrapper-set-questions-figure{ 
    margin: 0 auto;
    width: 290px;
   display: flex;
   justify-content: space-between;
   align-items: center;
    .wrapper-content-part{
        
        width: 40px;
        height: 40px;
        background-color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        .text-content{
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            text-transform: capitalize;
        }
    }
    .active_label_numeric{
        border: 6px solid #FFC700;
    }
}
.wrapper-set-questions-figure-and-text{

}
</style>