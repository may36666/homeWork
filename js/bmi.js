    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let titleBmi = document.querySelectorAll('.titleBmi');
    let result = document.getElementById("result")
    
    result.addEventListener('click',function(e){
        height = height.value;
        weight = weight.value;
        let bmi = ((weight*10000) / Math.pow(height,2)).toFixed(2) ;
        let titleBmiLen =titleBmi.length;
        for(i=0; i<titleBmiLen; i++){
            titleBmi[i].textContent = bmi;
        }
        height.value ='';
        weight.value ='';
        

    })

   