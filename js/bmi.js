    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    
    let result = document.getElementById("result")
    
    result.addEventListener('click',function(e){
        height = height.value;
        weight = weight.value;
        let bmi = ((weight*10000) / Math.pow(height,2)).toFixed(2) ;
        console.log(bmi);
    })