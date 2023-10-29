function convertTemperature(){
    const temperatureInput=document.getElementById("temperature");
    const fromUnitSelect=document.getElementById("fromUnit");
    const resultText=document.getElementById("resultText");

    const temperature=parseFloat(temperatureInput.value);
    const fromUnit=fromUnitSelect.value;
    let result=0;

    if(fromUnit==="kelvin"){
        result=(temperature+273.15);
    }
    else if(fromUnit==="farenheit"){
        result=((temperature*9/5)+32);
    }
    resultText.textContent=`Result : ${result.toFixed(2)} F`;
}