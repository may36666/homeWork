    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let result = document.getElementById('result');
    let resultBtn = document.getElementById("resultBtn");
    let titleWeight = document.getElementById('titleWeight');
    let resultList = document.getElementById('resultList');
    let bmi =0;
    

    let bmiColor = [
        {BMI:"過輕",
        color:"bg-[#31BAF9]",
        textColor:"text-[#31BAF9]",
        borserColor:"border-[#31BAF9]"
    },{
        BMI:"理想",
        color:"bg-[#86D73F]",
        textColor:"text-[#86D73F]",
        borserColor:"border-[#86D73F]"
    },
    {
        BMI:"過重",
        color:"bg-[#FF982D]",
        textColor:"text-[#FF982D]",
        borserColor:"border-[#FF982D]"
    },
    {
        BMI:"輕度肥胖",
        color:"bg-[#FF6C03]",
        textColor:"text-[#FF6C03]",
        borserColor:"border-[#FF6C03]"
    },
    {
        BMI:"中度肥胖",
        color:"bg-[#FF6C03]",
        textColor:"text-[#FF6C03]",
        borserColor:"border-[#FF6C03]"
    },
    {
        BMI:"重度肥胖",
        color:"bg-[#FF1200]",
        textColor:"text-[#FF1200]",
        borserColor:"border-[#FF1200]"
}];

    //計算BMI變更圖示
    resultBtn.addEventListener('click',function(e){
        bmiCount();
        if(bmi<19){
            resultBtn.classList.toggle('hidden')
            resultList.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] '+ bmiColor[0].borserColor +' text-center items-center relative"><div class="text-[32px] '+ bmiColor[0].textColor +' absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="'+ bmiColor[0].textColor +' text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] '+bmiColor[0].color+' rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="text-[32px] '+bmiColor[0].textColor+' absolute right-[-80px]" id="bmiStr>'+bmiColor[0].BMI+'</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            let bmiStr =document.getElementById('bmiStr');
            titleBmi.textContent = bmi;
            ResetBtn.addEventListener('click',reset)
        }
        else if(bmi>=19 && bmi<24){
            resultBtn.classList.toggle('hidden')
            resultList.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] '+ bmiColor[1].borserColor +' text-center items-center relative"><div class="text-[32px] '+ bmiColor[1].textColor +' absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="'+ bmiColor[1].textColor +' text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] '+bmiColor[1].color+' rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="text-[32px] '+bmiColor[1].textColor+' absolute right-[-80px]" id="bmiStr>'+bmiColor[1].BMI+'</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            let bmiStr =document.getElementById('bmiStr');
            titleBmi.textContent = bmi;
            ResetBtn.addEventListener('click',reset)
        }
        else if(bmi>=24 && bmi <27){
            resultBtn.classList.toggle('hidden')
            resultList.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] '+ bmiColor[2].borserColor +' text-center items-center relative"><div class="text-[32px] '+ bmiColor[2].textColor +' absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="'+ bmiColor[2].textColor +' text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] '+bmiColor[2].color+' rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="text-[32px] '+bmiColor[2].textColor+' absolute right-[-80px] id="bmiStr">'+bmiColor[2].BMI+'</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            let bmiStr =document.getElementById('bmiStr');
            titleBmi.textContent = bmi;
            ResetBtn.addEventListener('click',reset)
        }
        else if(bmi>=27 && bmi <30){
            resultBtn.classList.toggle('hidden')
            resultList.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] '+ bmiColor[3].borserColor +' text-center items-center relative"><div class="text-[32px] '+ bmiColor[3].textColor +' absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="'+ bmiColor[3].textColor +' text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] '+bmiColor[3].color+' rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="text-[32px] '+bmiColor[3].textColor+' absolute right-[-130px] id="bmiStr">'+bmiColor[3].BMI+'</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            let bmiStr =document.getElementById('bmiStr');
            titleBmi.textContent = bmi;
            ResetBtn.addEventListener('click',reset)
        }
        else if(bmi>=30 && bmi <35){
            resultBtn.classList.toggle('hidden')
            resultList.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] '+ bmiColor[4].borserColor +' text-center items-center relative"><div class="text-[32px] '+ bmiColor[4].textColor +' absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="'+ bmiColor[4].textColor +' text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] '+bmiColor[4].color+' rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="text-[32px] '+bmiColor[4].textColor+' absolute right-[-130px] id="bmiStr">'+bmiColor[4].BMI+'</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            let bmiStr =document.getElementById('bmiStr');
            titleBmi.textContent = bmi;
            ResetBtn.addEventListener('click',reset)
        }
        else{
            resultBtn.classList.toggle('hidden')
            resultList.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] '+ bmiColor[5].borserColor +' text-center items-center relative"><div class="text-[32px] '+ bmiColor[5].textColor +' absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="'+ bmiColor[5].textColor +' text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] '+bmiColor[5].color+' rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="text-[32px] '+bmiColor[5].textColor+' absolute right-[-130px] id="bmiStr">'+bmiColor[5].BMI+'</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            let bmiStr =document.getElementById('bmiStr');
            titleBmi.textContent = bmi;
            ResetBtn.addEventListener('click',reset);

        }
        
        
        
    });

    function bmiCount(){
        let heightVal = height.value;
        let weightVal = weight.value;
        bmi = ((weightVal*10000) / Math.pow(heightVal,2)).toFixed(2) ;
    };

    function reset(){
        resultList.innerHTML ='';
        resultBtn.classList.toggle('hidden');
    }

    
    
    
    

    //紀錄BMI

    
    let bmiList = document.getElementById('bmiList');
    let data = JSON.parse(localStorage.getItem('listData')) || [];
    

    function addData(){
        
    }

