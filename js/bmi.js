    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let result = document.getElementById('result');
    let resultBtn = document.getElementById("resultBtn");
    let titleWeight = document.getElementById('titleWeight');
    let bmi =0;
    

    let bmiColor = [{
        BMI:"理想",
        color:"bg-[#86D73F]",
        textColor:'text-[#86D73F]',
        borserColor:'border-[#86D73F]'
    },{
        BMI:"過輕",
        color:"bg-[#31BAF9]",
        textColor:'text-[#31BAF9]',
        borserColor:'border-[#31BAF9]'
    },
    {
        BMI:"過重",
        color:"bg-[#FF982D]",
        textColor:'text-[#FF982D]',
        borserColor:'border-[#FF982D]'
    },
    {
        BMI:"輕度肥胖",
        color:"bg-[#FF6C03]",
        textColor:'text-[#FF6C03]',
        borserColor:'border-[#FF6C03]'
    },
    {
        BMI:"中度肥胖",
        color:"bg-[#FF6C03]",
        textColor:'text-[#FF6C03]',
        borserColor:'border-[#FF6C03]'
    },
    {
        BMI:"重度肥胖",
        color:"bg-[#FF1200]",
        textColor:'text-[#FF1200]',
        borserColor:'border-[#FF1200]'
    }];

    //計算BMI變更圖示
    resultBtn.addEventListener('click',function(e){
        bmiCount();
        console.log(bmi);
        if(bmi<19){
            result.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] border-[#86D73F] text-center items-center relative"><div class="text-[32px] text-[#86D73F] absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="text-[#86D73F] text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] bg-[#86D73F] rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="text-[32px] text-[#86D73F] absolute right-[-80px]">理想</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            titleBmi.textContent = bmi;

            ResetBtn.addEventListener('click',function(){
                result.innerHTML ='<button type="button" id="resultBtn"><div class="w-[100px] h-[100px] rounded-full bg-[#FFD366] hover:shadow-[0_1px_6px_3px] hover:shadow-amber-200/50 active:bg-[#DEA821] text-center text-[25px] align-middle py-[35%]">看結果</div></button>';
            })
        }
        else if(bmi>=19 && bmi<24){
            
        }
        else if(bmi>=24 && bmi <27){
            
        }
        else if(bmi>=27 && bmi <30){
           
        }
        else if(bmi>=30 && bmi <35){
            
        }
        else{
            
        }
        
        
        
    });

    function bmiCount(){
        let heightVal = height.value;
        let weightVal = weight.value;
        bmi = ((weightVal*10000) / Math.pow(heightVal,2)).toFixed(2) ;
    };

    
    
    
    

    //紀錄BMI

    
    let bmiList = document.getElementById('bmiList');
    let data = JSON.parse(localStorage.getItem('listData')) || [];
    