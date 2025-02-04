    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let titleBmi = document.querySelectorAll('.titleBmi');
    let result = document.getElementById("result");
    let resetBtn= document.querySelector('.resetBtn');
    let standardWeight = document.getElementById('standardWeight');
    let underWeight = document.getElementById('underWeight');
    let fatWeight = document.getElementById('fatWeight');
    let mildFatWeight = document.getElementById('mildFatWeight');
    let moderatelyFatWeight =document.getElementById('moderatelyFatWeight');
    let severeFatWeight = document.getElementById('severeFatWeight');
    let bmi =0;
    let standardResetBtn = document.getElementById('standardResetBtn')
    let underResetBtn = document.getElementById('underResetBtn');
    let fatResetBtn = document.getElementById('fatResetBtn');
    let mildFatResetBtn = document.getElementById('mildFatResetBtn');
    let moderatelyResetBtn = document.getElementById('moderatelyResetBtn');
    let severeResetBtn = document.getElementById('severeResetBtn');

    //計算BMI變更圖示
    result.addEventListener('click',function(e){
        bmiCountShow();
        result.classList.toggle('hidden');
        if(bmi<19){
            underWeight.classList.toggle('hidden'); 
        }
        else if(bmi>=19 && bmi<24){
            standardWeight.classList.toggle('hidden');
        }
        else if(bmi>=24 && bmi <27){
            fatWeight.classList.toggle('hidden');
        }
        else if(bmi>=27 && bmi <30){
            mildFatWeight.classList.toggle('hidden');
        }
        else if(bmi>=30 && bmi <35){
            moderatelyFatWeight.classList.toggle('hidden');
        }
        else{
            severeFatWeight.classList.toggle('hidden');
        }
        
    })

    function bmiCountShow(){
        let heightVal = height.value;
        let weightVal = weight.value;
        bmi = ((weightVal*10000) / Math.pow(heightVal,2)).toFixed(2) ;
        let titleBmiLen =titleBmi.length;
        for(i=0; i<titleBmiLen; i++){
            titleBmi[i].textContent = bmi;
        }
        
    }
    
    standardResetBtn.addEventListener('click',function(){
        result.classList.toggle('hidden');
        standardWeight.classList.toggle('hidden');  
    })

    underResetBtn.addEventListener('click',function(){
        result.classList.toggle('hidden');
        underWeight.classList.toggle('hidden');  
    })

    fatResetBtn.addEventListener('click',function(){
        result.classList.toggle('hidden');
        fatWeight.classList.toggle('hidden');  
    })

    mildFatResetBtn.addEventListener('click',function(){
        result.classList.toggle('hidden');
        mildFatWeight.classList.toggle('hidden');  
    })

    moderatelyResetBtn.addEventListener('click',function(){
        result.classList.toggle('hidden');
        moderatelyFatWeight.classList.toggle('hidden');  
    })

    severeResetBtn.addEventListener('click',function(){
        result.classList.toggle('hidden');
        severeFatWeight.classList.toggle('hidden');  
    })

    //紀錄BMI

    