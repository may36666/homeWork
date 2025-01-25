    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let titleBmi = document.querySelectorAll('.titleBmi');
    let result = document.getElementById("result")
    
    result.addEventListener('click',function(e){
        let heightVal = height.value;
        let weightVal = weight.value;
        let bmi = ((weightVal*10000) / Math.pow(heightVal,2)).toFixed(2) ;
        console.log(bmi);
        let titleBmiLen =titleBmi.length;
        for(i=0; i<titleBmiLen; i++){
            titleBmi[i].textContent = bmi;
        }   
    })

   