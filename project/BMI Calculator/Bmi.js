const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt (document.querySelector("#height").value);
    const weight = parseInt (document.querySelector("#weight").value);
    const result = document.querySelector('#result');

    if (height===''|| height ===0|| isNaN(height)){
        result.innerHTML=`Please input a valid height ${height}`;
    }
    else if (weight=== "" || weight===0 || isNaN(weight)){
        result.innerHTML=`Please input a valid weight ${weight}`;
    }
    else{
       const output= (weight/((height*height)/1000)).toFixed(3);
        result.innerHTML= output;
    }
});